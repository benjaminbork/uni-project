import React, { useEffect, useState } from 'react';
import RestaurantCarousel from './RestaurantCarousel';
import {
  Box,
  CircularProgress,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useRestaurants } from '../../hooks/useRestaurants';
import { useQueryClient } from '@tanstack/react-query';
import filterSearchData from '../../utils/filterSearchDate';

const Recommendation = ({ cuisine }) => {
  const { isLoading, restaurants } = useRestaurants();
  const queryclient = useQueryClient();
  const [filter, setFilter] = useState({
    cuisines: [cuisine],
    diets: [],
  });
  const [filteredData, setFilteredData] = useState();
  const isNonMediumScreen = useMediaQuery('(min-width: 900px)');

  useEffect(
    function () {
      if (restaurants) {
        filterSearchData(filter, restaurants, queryclient);
        const tmpData = queryclient.getQueriesData(['filter'], (data) => data);
        if (tmpData) {
          setFilteredData(tmpData[0][1]);
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [restaurants]
  );

  return (
    <Box width='80%' m='24px auto 96px' display='flex' flexDirection='column'>
      <Box
        display='flex'
        alignItems='center'
        flexDirection={isNonMediumScreen ? 'row' : 'column'}
      >
        <Typography
          variant={isNonMediumScreen ? 'headlineMedium' : 'headlineSmall'}
          sx={{
            fontWeight: 500,
            mr: 'auto',
            lineHeight: isNonMediumScreen ? 3.6 : 2,
          }}
        >
          Recommendation based on {cuisine} cuisine
        </Typography>
        {!isLoading && restaurants && filteredData && (
          <Link
            to='/search'
            style={{
              textDecoration: 'none',
              color: 'black',
              alignSelf: isNonMediumScreen ? 'center' : 'flex-start',
              padding: isNonMediumScreen ? '0' : '20px 0px',
            }}
          >
            <Typography variant='titleMedium'>Show All</Typography>
          </Link>
        )}
      </Box>

      {isLoading && <CircularProgress size='4rem' color='inherit' />}
      {!restaurants && !isLoading && <Typography>No data found</Typography>}
      {restaurants && filteredData && (
        <RestaurantCarousel restaurants={filteredData} />
      )}
    </Box>
  );
};

export default Recommendation;

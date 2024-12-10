import { Box, CircularProgress, useMediaQuery } from '@mui/material';

import Navbar from '../navbar';
import Footer from '../footer';
import SearchForm from '../../components/SearchForm';
import FilterForm from './FilterForm';
import Results from './Results';
import { useGetFetchQuery } from '../../hooks/useGetFetchQuery';
import { useState } from 'react';
import { useRestaurants } from '../../hooks/useRestaurants';

const SearchPage = ({ isShowingAll, setIsShowingAll }) => {
  const { data, refetch, isFetching } = useGetFetchQuery(['search']);
  const [results, setResults] = useState();
  const isNonMediumScreen = useMediaQuery('(min-width: 900px)');

  const { restaurants: allData, isLoading } = useRestaurants();

  if (isFetching || isLoading) return <CircularProgress />;

  return (
    <Box
      backgroundColor='white'
      display='flex'
      flexDirection='column'
      height='100vh'
    >
      <Navbar />
      <Box
        width='80%'
        mt={4}
        margin='24px auto 96px'
        display='flex'
        flexDirection='column'
      >
        {/* SEARCH */}
        <Box sx={{ mt: isNonMediumScreen ? 2 : 4 }}>
          <SearchForm refetch={refetch} setIsShowingAll={setIsShowingAll} />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: isNonMediumScreen ? 'row' : 'column',
            gap: 5,
            mt: isNonMediumScreen ? 5 : 10,
          }}
        >
          <Box width={isNonMediumScreen ? '25%' : '100%'}>
            {/* FILTER */}
            <FilterForm
              restaurants={isShowingAll ? allData : data}
              setResults={setResults}
              isFetching={isFetching}
              results={results}
            />
          </Box>
          {/* FILTER AND SEARCH RESULTS */}
          <Box
            width={isNonMediumScreen ? '75%' : '100%'}
            m='0 auto'
            display='flex'
            flexDirection='column'
            sx={{ mt: isNonMediumScreen ? 0 : 10 }}
          >
            {isFetching && <CircularProgress />}
            {!isFetching && <Results results={results} />}
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default SearchPage;

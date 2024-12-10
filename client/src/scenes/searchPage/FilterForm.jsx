import {
  Box,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import filterSearchData from '../../utils/filterSearchDate';

const FilterForm = ({ restaurants, isFetching, setResults, results }) => {
  const queryclient = useQueryClient();
  const theme = useTheme();
  const [isCheckboxChaning, setIsCheckboxChanging] = useState(false);
  const [filter, setFilter] = useState({
    cuisines: [],
    diets: [],
  });

  // GET ALL VALUES FOR CUISINES FROM SEARCH RESULTS
  const cuisines = [];
  restaurants?.forEach(function (restaurant) {
    if (cuisines.indexOf(restaurant.cuisine) === -1) {
      cuisines.push(restaurant.cuisine);
    }
  });

  // GET ALL VALUES FOR CUISINES FROM SEARCH RESULTS
  const diets = [];
  restaurants?.forEach(function (restaurant) {
    if (diets.indexOf(restaurant.diet) === -1) {
      diets.push(restaurant.diet);
    }
  });

  useEffect(
    function () {
      filterSearchData(filter, restaurants, queryclient);
      setResults(() => {
        return queryclient.getQueryData(['filter']);
      });
      setIsCheckboxChanging(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filter]
  );

  if (isFetching) return <CircularProgress />;

  if (!restaurants || restaurants.length === 0) {
    setResults(restaurants);
    return;
  }
  if (filter.cuisines.length === 0 && filter.diets.length === 0) {
    setResults(restaurants);
  }

  return (
    <Box>
      {/* CUISINE FILTER */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* LABEL */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            mb: 2,
            alignSelf: 'start',
          }}
        >
          <IconButton
            disabled
            sx={{
              '&.MuiIconButton-root': {
                color: 'black',
                padding: '8px',
                borderRadius: '50%',
                backgroundColor: theme.palette.neutral.mediumLight2,
              },
            }}
          >
            <RestaurantMenuIcon sx={{ fontSize: '22px' }} />
          </IconButton>
          <Typography variant='titleMedium'>Cuisine</Typography>
        </Box>
        {/* CHECKBOXES */}
        <Box
          sx={{
            width: '80%',
            padding: '5px 10px',
            ml: 'auto',
            backgroundColor: theme.palette.background.default,
          }}
        >
          <FormGroup>
            {cuisines.length !== 0
              ? cuisines.map((cuisine) => (
                  <FormControlLabel
                    key={`Label${cuisine}`}
                    disabled={isCheckboxChaning}
                    control={
                      <Checkbox
                        key={`Box${cuisine}`}
                        onChange={(e) => {
                          e.persist();
                          setIsCheckboxChanging(e.target.checked);
                          if (e.target.checked) {
                            setFilter((filter) => ({
                              ...filter,
                              cuisines: [...filter.cuisines, e.target.value],
                            }));
                          } else {
                            setFilter((filter) => ({
                              ...filter,
                              cuisines: [
                                ...filter.cuisines.filter(
                                  (cuisine) => cuisine !== e.target.value
                                ),
                              ],
                            }));
                          }
                        }}
                      />
                    }
                    label={cuisine}
                    value={cuisine}
                    sx={{ alignSelf: 'flex-start' }}
                  />
                ))
              : ''}
          </FormGroup>
        </Box>
      </Box>

      {/* DIETS FILTER */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 4,
        }}
      >
        {/* LABEL */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            mb: 2,
            alignSelf: 'start',
          }}
        >
          <IconButton
            disabled
            sx={{
              '&.MuiIconButton-root': {
                color: 'black',
                padding: '8px',
                borderRadius: '50%',
                backgroundColor: theme.palette.neutral.mediumLight2,
              },
            }}
          >
            <RestaurantMenuIcon sx={{ fontSize: '22px' }} />
          </IconButton>
          <Typography variant='titleMedium'>Diets</Typography>
        </Box>
        {/* CHECKBOXES */}
        <Box
          sx={{
            width: '80%',
            padding: '5px 10px',
            ml: 'auto',
            backgroundColor: theme.palette.background.default,
          }}
        >
          <FormGroup>
            {diets.length !== 0
              ? diets.map((diet) => (
                  <FormControlLabel
                    key={`LabelDiet${diet}`}
                    disabled={isCheckboxChaning}
                    control={
                      <Checkbox
                        key={`BoxDiet${diet}`}
                        onChange={(e) => {
                          e.persist();
                          setIsCheckboxChanging(e.target.checked);
                          if (e.target.checked) {
                            setFilter((filter) => ({
                              ...filter,
                              diets: [...filter.diets, e.target.value],
                            }));
                          } else {
                            setFilter((filter) => ({
                              ...filter,
                              diets: [
                                ...filter.diets.filter(
                                  (diet) => diet !== e.target.value
                                ),
                              ],
                            }));
                          }
                        }}
                      />
                    }
                    label={diet}
                    value={diet}
                    sx={{ alignSelf: 'flex-start' }}
                  />
                ))
              : ''}
          </FormGroup>
        </Box>
      </Box>
    </Box>
  );
};

export default FilterForm;

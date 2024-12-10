import { Box, Typography } from '@mui/material';
import React from 'react';
import RestaurantCard from '../../components/RestaurantCard';

const Results = ({ results }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        margin: 2,
        gap: 5,
      }}
    >
      {!results || results.length === 0 ? (
        <Typography variant='titleMedium' sx={{ mt: 2 }}>
          No restaurants found. Start a new search.
        </Typography>
      ) : (
        results.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))
      )}
    </Box>
  );
};

export default Results;

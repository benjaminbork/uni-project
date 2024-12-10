import { Box, Rating, Typography } from '@mui/material';
import React from 'react';

const OverviewTab = ({ restaurant, restaurantReviews, theme }) => {
  return (
    <>
      {/* RATINGS */}
      <Box display='flex' gap='6px' mt={2}>
        <Rating
          readOnly
          value={restaurant?.star}
          width='20%'
          sx={{
            '& .MuiRating-iconFilled': {
              color: theme.palette.neutral.dark,
            },
            '& .MuiRating-iconHover': {
              color: theme.palette.neutral.dark,
            },
          }}
        />
        <Typography variant='lableSmall'>
          {restaurantReviews?.length} ratings{' '}
        </Typography>
      </Box>
      {/* LABELS */}
      <Box display='flex' mt={2} gap={1}>
        <Typography
          variant='labelLarge'
          sx={{
            borderRadius: '8px',
            border: '1.3px solid #000',
            display: 'inline-block',
            padding: '2px 4px',
          }}
        >
          {restaurant?.cuisine}
        </Typography>
        <Typography
          variant='labelLarge'
          sx={{
            borderRadius: '8px',
            border: '1.3px solid #000',
            display: 'inline-block',
            padding: '2px 4px',
          }}
        >
          {restaurant?.diet}
        </Typography>
      </Box>
      {/* DESCRIPTION */}
      <Box sx={{ mt: '54px' }}>
        <Typography variant='bodyMedium'>
          {restaurant?.name} is located in {restaurant?.location?.street},{' '}
          {restaurant?.location?.postcode} {restaurant?.location?.city}
        </Typography>
      </Box>
    </>
  );
};

export default OverviewTab;

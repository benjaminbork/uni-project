import { Box, CardMedia, Tab, Typography, useTheme } from '@mui/material';

import { TabContext, TabList, TabPanel } from '@mui/lab';

import { useState } from 'react';
import OverviewTab from './OverviewTab';
import ReviewsTab from './ReviewsTab';
import images from '../../assets/img/images';
import { useRandomImage } from '../../ImageContext';

const RestaurantCardLarge = ({ restaurant, restaurantReviews }) => {
  const theme = useTheme();
  const [value, setValue] = useState('1');

  const { randomImages } = useRandomImage();
  const imageToShow = randomImages[restaurant?.id] || images[0]; // Default to the first image if no specific image is set

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box width='80%' m='24px auto 96px' display='flex' flexDirection='column'>
      <Box
        sx={{
          width: '100%',
          color: theme.palette.neutral.dark,
          backgroundColor: theme.palette.background.default,
          borderRadius: '12px',
          border: `1px solid ${theme.palette.primary.light}`,
        }}
      >
        {/* IMAGE */}
        <CardMedia
          image={imageToShow}
          alt='Mock RestaurantImage'
          sx={{
            height: '400px',
            backgroundSize: 'cover',
            borderRadius: '12px 12px 0 0',
          }}
        />
        <Box
          p='56px'
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* TITLE */}
          <Typography variant='titleLarge' sx={{ fontWeight: '500' }}>
            {restaurant?.name}
          </Typography>
          {/* TABS */}
          <TabContext value={value}>
            <TabList
              value={value}
              onChange={handleChange}
              aria-label='lab API tabs example"'
            >
              <Tab label='Overview' value='1' />
              <Tab label='Reviews' value='2' />
            </TabList>

            {/* TAB: OVERVIEW  */}
            <TabPanel value='1'>
              <OverviewTab
                restaurant={restaurant}
                restaurantReviews={restaurantReviews}
                theme={theme}
              />
            </TabPanel>
            <TabPanel value='2'>
              <ReviewsTab restaurant={restaurant} theme={theme} />
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </Box>
  );
};

export default RestaurantCardLarge;

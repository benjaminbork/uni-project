import React, { useEffect } from 'react';
import {
  Box,
  CardMedia,
  CircularProgress,
  Rating,
  Typography,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

import images from '../assets/img/images';
import { useRandomImage } from '../ImageContext';
import { useRestaurantReviews } from '../hooks/useRestaurantReviews';

const RestaurantCard = ({ restaurant }) => {
  const theme = useTheme();
  const { randomImages, setRandomImageForRestaurant } = useRandomImage();
  const { isLoading, restaurantReviews } = useRestaurantReviews(restaurant.id);

  useEffect(() => {
    if (!randomImages[restaurant?.id]) {
      const randomIndex = Math.floor(Math.random() * images.length);
      const selectedImage = images[randomIndex];
      setRandomImageForRestaurant(restaurant?.id, selectedImage);
    }
  }, [restaurant, randomImages, setRandomImageForRestaurant]);

  const imageToShow = randomImages[restaurant?.id] || '';

  if (isLoading) return <CircularProgress />;

  return (
    <Link
      to={`/restaurant/${restaurant?.id}`}
      style={{ textDecoration: 'none' }}
    >
      <Box
        sx={{
          width: '100%',
          color: theme.palette.neutral.dark,
          backgroundColor: theme.palette.background.default,
          borderRadius: '12px',
          border: `1px solid ${theme.palette.primary.light}`,
        }}
      >
        <CardMedia
          image={imageToShow}
          alt='Mock RestaurantImage'
          sx={{
            height: '125px',
            backgroundSize: 'cover',
            borderRadius: '12px 12px 0 0',
          }}
        />
        <Box
          p='16px'
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant='titleMedium' sx={{ mb: '-8px' }}>
            {restaurant?.name}
          </Typography>
          <Box display='flex' gap='6px'>
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
              {restaurantReviews?.length} ratings
            </Typography>
          </Box>
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
          <Box margin='0 auto' alignItems='center' justifyItems='center' mt={3}>
            <Button>Book Now</Button>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default RestaurantCard;

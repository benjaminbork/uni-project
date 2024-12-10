import { useParams } from 'react-router-dom';
import { useRestaurant } from '../../hooks/useRestaurant';
import { Box, CircularProgress, Typography } from '@mui/material';

import RestaurantCardLarge from './RestaurantCardLarge';
import Navbar from '../navbar';
import Footer from '../footer';
import AvailabilityCard from './AvailabilityCard';
import { useRestaurantAvailability } from '../../hooks/useRestaurantAvailability';
import { useRestaurantReviews } from '../../hooks/useRestaurantReviews';

const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const { isLoading, restaurant } = useRestaurant(restaurantId);
  const { isLoading: isLoading2, restaurantAvailability } =
    useRestaurantAvailability(restaurantId);
  const { isLoading: isLoading3, restaurantReviews } =
    useRestaurantReviews(restaurantId);

  if (isLoading || isLoading2 || isLoading3) return <CircularProgress />;

  // PLACEHOLDER FOR EMPTY RESPONSE
  if (!restaurant)
    return <Typography>No data found. Please try later again.</Typography>;

  return (
    <Box
      backgroundColor='white'
      display='flex'
      flexDirection='column'
      height='100vh'
    >
      <Navbar />
      <RestaurantCardLarge
        restaurant={restaurant}
        restaurantReviews={restaurantReviews}
      />
      <AvailabilityCard restaurantAvailability={restaurantAvailability} />

      <Footer />
    </Box>
  );
};

export default RestaurantPage;

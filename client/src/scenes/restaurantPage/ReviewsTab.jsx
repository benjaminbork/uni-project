import {
  Box,
  CircularProgress,
  Typography,
  useMediaQuery,
} from '@mui/material';

import { useRestaurantReviews } from '../../hooks/useRestaurantReviews';
import Review from './Review';
import ReviewForm from './ReviewForm';

const ReviewsTab = ({ theme, restaurant }) => {
  const { isLoading, restaurantReviews } = useRestaurantReviews(restaurant.id);
  const isNonMediumScreen = useMediaQuery('(min-width: 900px)');

  if (isLoading) return <CircularProgress />;
  if (!restaurantReviews)
    return <Typography> No reviews avaiblable</Typography>;

  return (
    <Box
      sx={{
        display: isNonMediumScreen ? 'grid' : 'flex',
        flexDirection: 'column',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 3,
      }}
    >
      {/* CREATE REVIEW */}
      <Box sx={{ gridColumn: '1 / 3' }}>
        <ReviewForm />
      </Box>

      {/* SEE ALL REVIEWS */}
      {restaurantReviews.map((review) => (
        <Review review={review} key={`${review.username}`} />
      ))}
    </Box>
  );
};

export default ReviewsTab;

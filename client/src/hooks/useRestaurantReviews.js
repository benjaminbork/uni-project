import { useQuery } from '@tanstack/react-query';
import { getRestaurantReviews } from '../services/apiRestaurant';

export function useRestaurantReviews(id) {
  const {
    isLoading,
    data: restaurantReviews,
    error,
  } = useQuery({
    queryKey: [`restaurant/${id}/reviews`],
    queryFn: () => getRestaurantReviews(id),
    refetchInterval: 1000,
  });

  return { isLoading, error, restaurantReviews };
}

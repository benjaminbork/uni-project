import { useQuery } from '@tanstack/react-query';
import { getRestaurantAvailibility } from '../services/apiRestaurant';

export function useRestaurantAvailability(id) {
  const {
    isLoading,
    data: restaurantAvailability,
    error,
  } = useQuery({
    queryKey: [`restaurant/${id}/availability`],
    queryFn: () => getRestaurantAvailibility(id),
  });

  return { isLoading, error, restaurantAvailability };
}

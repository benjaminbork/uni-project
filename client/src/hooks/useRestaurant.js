import { useQuery } from '@tanstack/react-query';
import { getRestaurantById } from '../services/apiRestaurant';

export function useRestaurant(id) {
  const {
    isLoading,
    data: restaurant,
    error,
  } = useQuery({
    queryKey: [`restaurant/${id}`],
    queryFn: () => getRestaurantById(id),
  });

  return { isLoading, error, restaurant };
}

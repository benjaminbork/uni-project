import { useQuery } from '@tanstack/react-query';
import { getRestaurants } from '../services/apiRestaurant';

export function useRestaurants() {
  const {
    isLoading,
    data: restaurants,
    error,
  } = useQuery({
    queryKey: ['restaurants'],
    queryFn: getRestaurants,
  });

  return { isLoading, error, restaurants };
}

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createReservation as createReservationAPI } from '../services/apiRestaurant';

export function useCreateReservation() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createReservation } = useMutation({
    mutationFn: createReservationAPI,
    onSuccess: () => {
      queryClient.invalidateQueries();
      queryClient.refetchQueries();
    },
  });

  return { isCreating, createReservation };
}

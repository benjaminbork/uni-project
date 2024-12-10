import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createSearch as createSearchAPI } from '../services/apiRestaurant';

export function useCreateSearch() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createSearch } = useMutation({
    mutationFn: createSearchAPI,

    onSuccess: (data) => {
      queryClient.setQueryData(['search'], data);
    },
    onError: () => {
      queryClient.invalidateQueries();
    },
  });

  return { isCreating, createSearch };
}

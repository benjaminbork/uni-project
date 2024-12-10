import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createReview as createReviewService } from '../services/apiRestaurant';

export function useCreateReview() {
  const { isLoading: isCreatingReview, mutate: createReview } = useMutation({
    mutationFn: createReviewService,
  });

  return { isCreatingReview, createReview };
}

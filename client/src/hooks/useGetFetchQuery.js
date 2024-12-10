import { useQuery, useQueryClient } from '@tanstack/react-query';

export const useGetFetchQuery = (name) => {
  const queryClient = useQueryClient();
  const fetchQuery = () => {
    const data = queryClient.getQueryData(name);
    return data || [];
  };

  const { data, refetch, isFetching } = useQuery({
    queryKey: name,
    queryFn: fetchQuery,
  });

  return { data, refetch, isFetching };
};

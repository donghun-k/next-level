import { useQuery } from '@tanstack/react-query';

import { searchPostsAction } from '@/actions/search';

export const usePostsQuery = (options: {
  tag?: string;
  query?: string;
  page: number;
  pageSize: number;
}) => {
  return useQuery({
    queryKey: ['posts', options],
    queryFn: () => searchPostsAction(options),
  });
};

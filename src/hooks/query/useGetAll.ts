import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { apiGet } from '@/src/utils/axios';

export const useGetAll = <T>(key: any[], url: string) => {
  const {
    data, isLoading, isFetching, isSuccess, isError, error, refetch,
  } = useQuery<T, AxiosError>({
    queryKey: key,
    queryFn: async () => {
      const { data, } = await apiGet<T>(url);

      return data;
    },
  });

  return {
    data,
    isSuccess,
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  };
};

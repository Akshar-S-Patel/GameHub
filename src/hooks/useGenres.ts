import { useQuery } from '@tanstack/react-query';
import APIClient, { FetchResponse } from '@/service/api-client';
import ms from 'ms';
import { Genre } from '../entities/Genre';

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('48h'),
  });

export default useGenres;

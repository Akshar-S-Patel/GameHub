import { useQuery } from '@tanstack/react-query';
import APIClient, { FetchResponse } from '@/service/api-client';
import ms from 'ms';
import { Platform } from '@/entities/Platform';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>>({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('48h'),
  });

export default usePlatforms;

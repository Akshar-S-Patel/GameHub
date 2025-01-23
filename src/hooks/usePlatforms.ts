import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "@/service/api-client";

export interface Platform { 
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () => useQuery<FetchResponse<Platform>>({
  queryKey: ['platforms'],
  queryFn: apiClient.getAll,
  staleTime: 2 * 24 * 60 * 60 * 1000, // 2d i.e. 48hr
})

export default usePlatforms;
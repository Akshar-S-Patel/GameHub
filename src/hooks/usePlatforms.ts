import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "./useData";
import apiClient from "@/service/api-client";

export interface Platform { 
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useQuery<FetchResponse<Platform>>({
  queryKey: ['platforms'],
  queryFn: () => apiClient.get('/platforms/lists/parents').then(res => res.data),
  staleTime: 2 * 24 * 60 * 60 * 1000, // 2d i.e. 48hr
})

export default usePlatforms;
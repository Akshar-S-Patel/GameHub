import { useQuery } from "@tanstack/react-query";
import apiClient from "@/service/api-client";
import { FetchResponse } from "@/service/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}


const useGenres = () => useQuery<FetchResponse<Genre>, Error>({
  queryKey: ['genres'],
  queryFn: () => apiClient.get('/genres').then(res => res.data),
  staleTime: 2 * 24 * 60 * 60 * 1000, // 2d i.e. 48hr
})

export default useGenres;
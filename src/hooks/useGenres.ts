import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "@/service/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => useQuery<FetchResponse<Genre>, Error>({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
  staleTime: 2 * 24 * 60 * 60 * 1000, // 2d i.e. 48hr
})

export default useGenres;
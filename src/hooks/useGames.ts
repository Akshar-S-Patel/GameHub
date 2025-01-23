import { GameQuery } from "@/App";
import { FetchResponse } from "@/service/api-client";
import { Platform } from "./usePlatforms";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/service/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: Platform[];
  metacritic: number;
  rating_top: number;
}

const useGames = ( gameQuery: GameQuery) => useQuery<FetchResponse<Game>, Error>({
  queryKey: [gameQuery],
  queryFn: () => apiClient.get('/games', {params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText
        }}).then(res => res.data),
});

export default useGames;
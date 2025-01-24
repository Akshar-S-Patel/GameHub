import { GameQuery } from "@/App";
import APIClient, { FetchResponse } from "@/service/api-client";
import { Platform } from "./usePlatforms";
import { useInfiniteQuery } from "@tanstack/react-query";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: Platform[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>('/games');


const useGames = ( gameQuery: GameQuery) => useInfiniteQuery<FetchResponse<Game>, Error>({
  queryKey: [gameQuery],
  queryFn: ({pageParam = 1}) =>
    apiClient.getAll({
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam
      },
    }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    }
});

export default useGames;
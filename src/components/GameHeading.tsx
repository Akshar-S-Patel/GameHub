import useGenre from '@/hooks/useGenre';
import usePlatform from '@/hooks/usePlatform';
import useGameQueryStore from '@/store';
import { Heading } from '@chakra-ui/react';

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  return (
    <Heading marginY={5} as='h1' fontSize='5xl'>
      {platform?.name} {genre?.name} Games
    </Heading>
  );
};

export default GameHeading;

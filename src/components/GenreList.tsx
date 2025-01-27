import getCroppedImageUrl from '@/service/image-url';
import useGameQueryStore from '@/store';
import { Heading, HStack, Image, Link, List, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import GenreListSkeleton from './GenreListSkeleton';

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error)
    return (
      <>
        <Text>{'Unable to fetch Genres.'}</Text>
        <br />
        <Text>{error.message}</Text>
      </>
    );

  if (isLoading) return <GenreListSkeleton />;

  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>
        Genres
      </Heading>
      <List.Root variant='plain'>
        {genres.results.map((genre) => (
          <List.Item key={genre.id} paddingY='5px'>
            <HStack>
              <Image
                boxSize='32px'
                borderRadius={8}
                objectFit='cover'
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Link
                whiteSpace='normal'
                textAlign='left'
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize='lg'
                fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                variant='plain'
              >
                {genre.name}
              </Link>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;

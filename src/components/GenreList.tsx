import getCroppedImageUrl from '@/service/image-url';
import { List, HStack, Image, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import GenreListSkeleton from './GenreListSkeleton';

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();

  if (error)
    return (
      <>
        <Text>{'Unable to fetch Genres.'}</Text>
        <br />
        <Text>{error}</Text>
      </>
    );

  if (isLoading) return <GenreListSkeleton />;

  return (
    <List.Root variant='plain'>
      {genres.map((genre) => (
        <List.Item key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize='32px'
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;

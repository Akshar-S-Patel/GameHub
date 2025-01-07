import getCroppedImageUrl from '@/service/image-url';
import { List, HStack, Image, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';

const GenreList = () => {
  const { data: genres } = useGenres();

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

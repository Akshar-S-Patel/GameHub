import getCroppedImageUrl from '@/service/image-url';
import { List, HStack, Image, Text, Heading, Link } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import GenreListSkeleton from './GenreListSkeleton';

interface Props {
  selectedGenreId?: number;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenreId, onSelectGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenres();

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
                onClick={() => onSelectGenre(genre)}
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

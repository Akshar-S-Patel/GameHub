import { List, HStack, Skeleton } from '@chakra-ui/react';

const GenreListSkeleton = () => {
  const items = [...Array(10).keys()]; // Array from 0 to 9
  return (
    <List.Root variant='plain'>
      {items.map((i) => (
        <List.Item key={i} paddingY='10px'>
          <HStack>
            <Skeleton height={8} width={8} />
            <Skeleton height={5} width={20} />
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreListSkeleton;

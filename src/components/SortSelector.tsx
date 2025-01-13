import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from '@/components/ui/menu';
import { Group, IconButton } from '@chakra-ui/react';
import { Button } from '@/components/ui/button';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { useState } from 'react';

const SortSelector = () => {
  const [isExpended, setIsExpended] = useState<Boolean>(false);
  const platforms = [
    'Relevance',
    'Date added',
    'Name',
    'Release date',
    'Popularity',
    'Average rating',
  ];

  return (
    <MenuRoot onInteractOutside={() => setIsExpended(false)}>
      <MenuTrigger asChild>
        <Group attached onClick={() => setIsExpended(!isExpended)}>
          <Button variant='outline' size='sm'>
            Order by: Relevance
          </Button>
          <IconButton variant='outline' size='sm'>
            {isExpended ? <BsChevronDown /> : <BsChevronUp />}
          </IconButton>
        </Group>
      </MenuTrigger>
      <MenuContent>
        {platforms.map((platform, i) => (
          <MenuItem
            key={i}
            value={platform}
            onClick={() => setIsExpended(false)}
          >
            {platform}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;

import { Button } from '@/components/ui/button';
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from '@/components/ui/menu';
import usePlatform from '@/hooks/usePlatform';
import useGameQueryStore from '@/store';
import { Group, IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';

const PlatformSelector = () => {
  const { data: platforms, error } = usePlatforms();
  const [isExpended, setIsExpended] = useState<Boolean>(false);

  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;

  return (
    <MenuRoot onInteractOutside={() => setIsExpended(false)}>
      <MenuTrigger asChild>
        <Group attached onClick={() => setIsExpended(!isExpended)}>
          <Button variant='outline' size='sm'>
            {selectedPlatform?.name || 'Platforms'}
          </Button>
          <IconButton variant='outline' size='sm'>
            {isExpended ? <BsChevronDown /> : <BsChevronUp />}
          </IconButton>
        </Group>
      </MenuTrigger>
      <MenuContent>
        {platforms?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            value={platform.name}
            onClick={() => {
              setSelectedPlatformId(platform.id);
              setIsExpended(false);
            }}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;

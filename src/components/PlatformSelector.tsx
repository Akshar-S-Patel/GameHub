import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from '@/components/ui/menu';
import { Group, IconButton } from '@chakra-ui/react';
import { Button } from '@/components/ui/button';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import usePlatforms, { Platform } from '../hooks/usePlatforms';
import { useState } from 'react';

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data: platforms, error } = usePlatforms();
  const [isExpended, setIsExpended] = useState<Boolean>(false);

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
        {platforms.map((platform) => (
          <MenuItem
            key={platform.id}
            value={platform.name}
            onClick={() => {
              onSelectPlatform(platform);
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

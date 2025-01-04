import { ColorModeButton } from './ui/color-mode';
import { HStack, Text } from '@chakra-ui/react';

const ColorModeSwitch = () => {
  return (
    <HStack>
      <ColorModeButton />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;

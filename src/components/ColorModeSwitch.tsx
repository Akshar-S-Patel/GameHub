import { ColorModeButton, useColorMode } from './ui/color-mode';
import { HStack, Text } from '@chakra-ui/react';

const capitalizeFirstLetter = (str: string) =>
  !str ? str : str.charAt(0).toUpperCase() + str.slice(1);

const ColorModeSwitch = () => {
  const mode = useColorMode().colorMode || '';
  const currentMode = capitalizeFirstLetter(mode);
  return (
    <HStack>
      <ColorModeButton />
      <Text whiteSpace='nowrap'>{currentMode}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;

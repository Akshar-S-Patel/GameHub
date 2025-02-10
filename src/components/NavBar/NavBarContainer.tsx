import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const NavBarContainer = ({ children }: Props) => {
  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      w='100%'
      p='10px'
    >
      {children}
    </Flex>
  );
};

export default NavBarContainer;

import { Box } from '@chakra-ui/react';
import { MdClose, MdMenu } from 'react-icons/md';

interface Props {
  toggle: () => void;
  isOpen: boolean;
}

const MenuToggle = ({ toggle, isOpen }: Props) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <MdClose /> : <MdMenu />}
    </Box>
  );
};

export default MenuToggle;

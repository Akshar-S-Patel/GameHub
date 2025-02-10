import { useState } from 'react';
import Logo from './Logo';
import MenuToggle from './MenuToggle';
import NavBarContainer from './NavBarContainer';
import logo from '../../assets/logo.webp';
import { Box, Stack } from '@chakra-ui/react';
import MenuItem from './MenuItem';
import ColorModeSwitch from '../ColorModeSwitch';
import SearchInput from '../SearchInput';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const menuItems = [
    { to: '/about-us', title: 'About Us' },
    { to: '/contact-us', title: 'Contact Us' },
  ];

  return (
    <NavBarContainer>
      <Logo logo={logo} />
      <MenuToggle toggle={toggle} isOpen={isOpen} />

      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Stack
          gap={8}
          align='center'
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          {menuItems.map(({ to, title }, index) => (
            <MenuItem key={index} to={to}>
              {title}
            </MenuItem>
          ))}
          <ColorModeSwitch />
          <SearchInput />
        </Stack>
      </Box>
    </NavBarContainer>
  );
};
export default NavBar;

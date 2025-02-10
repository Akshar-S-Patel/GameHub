import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import NavBar from '@/components/NavBar/NavBar';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box padding={2}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;

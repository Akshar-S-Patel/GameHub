import { Box, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface Props {
  logo: string;
}

const Logo = ({ logo }: Props) => {
  return (
    <Box w='100px'>
      <Link to='/'>
        <Image src={logo} boxSize='60px' objectFit='cover' />
      </Link>
    </Box>
  );
};

export default Logo;

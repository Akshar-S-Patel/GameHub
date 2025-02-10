import { Box, Image } from '@chakra-ui/react';

interface Props {
  logo: string;
}

const Logo = ({ logo }: Props) => {
  return (
    <Box w='100px'>
      <Image src={logo} boxSize='60px' objectFit='cover' />
    </Box>
  );
};

export default Logo;

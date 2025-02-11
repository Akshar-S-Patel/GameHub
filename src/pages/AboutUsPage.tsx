import { Box, Heading, Text, Stack, Image } from '@chakra-ui/react';
import avatar from '../assets/avatar.jpeg';

const AboutUsPage = () => {
  return (
    <Box p={5}>
      <Stack gap={8} align='center'>
        <Heading as='h1' size='2xl'>
          About Us
        </Heading>
        <Image
          borderRadius='full'
          boxSize='150px'
          src={avatar}
          alt='Company Logo'
        />
        <Text fontSize='lg' maxW='600px'>
          Welcome to our company! We are dedicated to providing the best service
          possible. Our team is made up of experienced professionals who are
          passionate about what they do. We believe in innovation, quality, and
          customer satisfaction. Thank you for choosing us!
        </Text>
        <Text fontSize='lg' maxW='600px'>
          This website is created by Akshar Patel, a self-taught full stack
          developer with 4+ years of professional experience and passion for
          coding. My journey into the world of programming began with a simple
          curiosity and has blossomed into a full-fledged career. Through
          countless hours of learning and building, I have honed my skills to
          create seamless and efficient web applications. My dedication and love
          for technology shine through in every project I undertake. In addition
          to coding, I have a keen interest in outer space, which has become a
          hobby of mine. I am fascinated by the mysteries of the universe and
          always eager to learn more about it.
        </Text>
      </Stack>
    </Box>
  );
};

export default AboutUsPage;

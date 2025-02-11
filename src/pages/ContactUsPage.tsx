import ContactUsForm from '@/components/ContactUsForm';
import { Box } from '@chakra-ui/react';

const ContactUsPage = () => {
  return (
    <Box
      maxW='450px'
      mx='auto'
      mt={10}
      p={5}
      borderWidth={1}
      borderRadius='lg'
      boxShadow='lg'
    >
      <ContactUsForm />
    </Box>
  );
};

export default ContactUsPage;

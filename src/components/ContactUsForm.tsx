import { Button, Input, Stack, Heading, Textarea } from '@chakra-ui/react';
import { Field } from '@/components/ui/field';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });

  return (
    <>
      <Heading as='h1' size='xl' mb={5}>
        Contact Us
      </Heading>
      <form onSubmit={onSubmit}>
        <Stack gap='4' align='flex-start' maxW='sm'>
          <Field
            label='Name'
            invalid={!!errors.name}
            errorText={errors.name?.message}
          >
            <Input {...register('name', { required: 'Name is required' })} />
          </Field>
          <Field
            label='Email'
            invalid={!!errors.email}
            errorText={errors.email?.message}
          >
            <Input
              type='email'
              {...register('email', { required: 'Email is required' })}
            />
          </Field>
          <Field
            label='Message'
            invalid={!!errors.message}
            errorText={errors.message?.message}
          >
            <Textarea
              {...register('message', { required: 'Message is required' })}
            />
          </Field>
          <Button type='submit'>Submit</Button>
        </Stack>
      </form>
    </>
  );
};

export default ContactUsForm;

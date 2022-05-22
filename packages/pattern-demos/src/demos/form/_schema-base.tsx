/* eslint-disable no-console */
import React from 'react';
import { z } from 'zod';
import { useForm, zodResolver } from '@pattern-ui/form';
import { NumberInput, TextInput, Button, Box, Group } from '@pattern-ui/core';

const schema = z.object({
  name: z.string().min(2, { message: 'Name should have at least 2 letters' }),
  email: z.string().email({ message: 'Invalid email' }),
  age: z.number().min(18, { message: 'You must be at least 18 to create an account' }),
});

export function SchemaBase() {
  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      name: '',
      email: '',
      age: 18,
    },
  });

  return (
    <Box sx={{ maxWidth: 340 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput required placeholder="example@mail.com" {...form.getInputProps('email')} />
        <TextInput required placeholder="John Doe" mt="sm" {...form.getInputProps('name')} />
        <NumberInput required placeholder="Your age" mt="sm" {...form.getInputProps('age')} />

        <Group position="right" mt="xl">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

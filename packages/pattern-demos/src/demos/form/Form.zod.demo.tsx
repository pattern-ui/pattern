/* eslint-disable no-console */
import { SchemaBase } from './_schema-base';

const code = `
import { z } from 'zod';
import { useForm, zodResolver } from '@pattern/form';
import { NumberInput, TextInput, Button, Box, Group } from '@pattern/core';

const schema = z.object({
  name: z.string().min(2, { message: 'Name should have at least 2 letters' }),
  email: z.string().email({ message: 'Invalid email' }),
  age: z.number().min(18, { message: 'You must be at least 18 to create an account' }),
});

function Demo() {
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
        // form fields...
      </form>
    </Box>
  );
}
`;

export const zod: PatternCodeDemo = {
  type: 'code',
  component: SchemaBase,
  code,
};

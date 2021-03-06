/* eslint-disable no-console */
import { SchemaBase } from './_schema-base';

const code = `
import * as Yup from 'yup';
import { useForm, yupResolver } from '@pattern-ui/form';
import { NumberInput, TextInput, Button, Box, Group } from '@pattern-ui/core';

const schema = Yup.object().shape({
  name: Yup.string().min(2, 'Name should have at least 2 letters'),
  email: Yup.string().email('Invalid email'),
  age: Yup.number().min(18, 'You must be at least 18 to create an account'),
});

function Demo() {
  const form = useForm({
    schema: yupResolver(schema),
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

export const yup: PatternCodeDemo = {
  type: 'code',
  component: SchemaBase,
  code,
};

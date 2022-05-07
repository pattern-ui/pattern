import { TextInput } from '@pattern-ui/core';

const codeTemplate = (props: string) => `
import { TextInput } from '@pattern-ui/core';

export default function Demo() {
  return (
    <TextInput
     ${props}
    />
  );
}
`;

export const control: PatternControlDemo = {
  type: 'control',
  component: TextInput,
  codeTemplate,
  demoProps: { multiline: 3 },
  controls: [
    { name: 'placeholder', type: 'string', initialValue: 'Your name' },
    {
      name: 'label',
      type: 'string',
      initialValue: 'Full name',
    },
    {
      name: 'description',
      type: 'string',
      initialValue: '',
    },
    {
      name: 'error',
      type: 'string',
      initialValue: '',
    },
    {
      name: 'variant',
      type: 'select',
      data: [
        { label: 'default', value: 'default' },
        { label: 'filled', value: 'filled' },
        { label: 'unstyled', value: 'unstyled' },
      ],
      initialValue: 'default',
      defaultValue: 'default',
    },
    { name: 'radius', type: 'size', initialValue: 'xs', defaultValue: 'xs' },
    { name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
    {
      name: 'required',
      type: 'boolean',
      initialValue: true,
      defaultValue: false,
    },
  ],
};

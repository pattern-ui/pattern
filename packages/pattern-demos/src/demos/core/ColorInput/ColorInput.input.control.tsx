import { ColorInput } from '@pattern-ui/core';

const codeTemplate = (props: string) => `
import { ColorInput } from '@pattern-ui/core';

export default function Demo() {
  return (
    <ColorInput
     ${props}
    />
  );
}
`;

export const inputControl: PatternControlDemo = {
  type: 'control',
  component: ColorInput,
  codeTemplate,
  demoProps: { multiline: 3 },
  controls: [
    { name: 'placeholder', type: 'string', initialValue: 'Pick color' },
    {
      name: 'label',
      type: 'string',
      initialValue: 'Your favorite color',
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

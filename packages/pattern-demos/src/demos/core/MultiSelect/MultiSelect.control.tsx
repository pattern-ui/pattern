import React from 'react';
import { MultiSelect } from '@pattern-ui/core';

const codeTemplate = (props: string) => `
import { MultiSelect } from '@pattern-ui/core';

export default function Demo() {
  return (
    <MultiSelect
      data={['React', 'Angular', 'Svelte', 'Vue']}
     ${props}
    />
  );
}
`;

export const control: PatternControlDemo = {
  type: 'control',
  component: (props: any) => (
    <MultiSelect data={['React', 'Angular', 'Svelte', 'Vue']} {...props} />
  ),
  codeTemplate,
  demoProps: { multiline: 3 },
  controls: [
    { name: 'placeholder', type: 'string', initialValue: 'Pick all you like' },
    {
      name: 'invalid',
      type: 'boolean',
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
  ],
};

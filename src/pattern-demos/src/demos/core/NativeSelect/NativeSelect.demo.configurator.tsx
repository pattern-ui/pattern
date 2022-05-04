import React from 'react';
import { NativeSelect } from '@pattern/core';

const codeTemplate = (props: string) => `
import { NativeSelect } from '@pattern/core';

function Demo() {
  return (
    <NativeSelect
      data={['React', 'Vue', 'Angular', 'Svelte']}
     ${props}
    />
  );
}
`;

export const configurator: PatternDemo = {
  type: 'configurator',
  component: (props: any) => (
    <NativeSelect {...props} data={['React', 'Vue', 'Angular', 'Svelte']} />
  ),
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
    { name: 'placeholder', type: 'string', initialValue: 'Pick one' },
    {
      name: 'label',
      type: 'string',
      initialValue: 'Select your favorite framework/library',
    },
    {
      name: 'description',
      type: 'string',
      initialValue: 'This is anonymous',
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

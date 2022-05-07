import React from 'react';
import { TimeInput } from '@pattern-ui/dates';

const codeTemplate = (props: string) => `
import { TimeInput } from '@pattern-ui/dates';

export default function Demo() {
  return (
    <TimeInput
      defaultValue={new Date()}
     ${props}
    />
  );
}
`;

export const control: PatternControlDemo = {
  type: 'control',
  component: (props) => <TimeInput defaultValue={new Date()} {...props} />,
  codeTemplate,
  demoProps: { multiline: 3 },
  controls: [
    {
      name: 'label',
      type: 'string',
      initialValue: 'Pick time',
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
    {
      name: 'format',
      type: 'select',
      data: [
        { label: '24', value: '24' },
        { label: '12', value: '12' },
      ],
      initialValue: '24',
      defaultValue: '24',
    },
    {
      name: 'withSeconds',
      type: 'boolean',
      initialValue: false,
      defaultValue: false,
    },
    { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
    {
      name: 'required',
      type: 'boolean',
      initialValue: true,
      defaultValue: false,
    },
    {
      name: 'clearable',
      type: 'boolean',
      initialValue: false,
      defaultValue: false,
    },
  ],
};

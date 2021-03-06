import React from 'react';
import { Button, ButtonProps, Group } from '@pattern-ui/core';

function Wrapper(props: ButtonProps<'button'>) {
  return (
    <Group position="center">
      <Button {...props} />
    </Group>
  );
}

const codeTemplate = (props: string, children: string) => `
import { Button } from '@pattern-ui/core';

export default function Demo() {
  return (
    <Button${props}>
      ${children}
    </Button>
  );
}
`;

export const control: PatternControlDemo = {
  type: 'control',
  component: Wrapper,
  codeTemplate,
  controls: [
    {
      name: 'variant',
      type: 'select',
      data: [
        { label: 'filled', value: 'filled' },
        { label: 'light', value: 'light' },
        { label: 'outline', value: 'outline' },
        { label: 'default', value: 'default' },
        { label: 'subtle', value: 'subtle' },
      ],
      initialValue: 'filled',
      defaultValue: 'filled',
    },
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'radius', type: 'size', initialValue: 'xs', defaultValue: 'xs' },
    { name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'compact', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'uppercase', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'children', type: 'string', initialValue: 'Settings' },
  ],
};

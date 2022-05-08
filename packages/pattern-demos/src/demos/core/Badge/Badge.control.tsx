import React from 'react';
import { Badge, BadgeProps, Group } from '@pattern-ui/core';

function Wrapper(props: BadgeProps<'div'>) {
  return (
    <Group position="center">
      <Badge {...props}>Badge</Badge>
    </Group>
  );
}

const codeTemplate = (props: string) => `
import { Badge } from '@pattern-ui/core';

export default function Demo() {
  return (
    <Badge${props}>Badge</Badge>
  );
}
`;

export const control: PatternControlDemo = {
  type: 'control',
  component: Wrapper,
  codeTemplate,
  controls: [
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'radius', type: 'size', initialValue: 'xl', defaultValue: 'xl' },
    {
      name: 'variant',
      type: 'select',
      initialValue: 'light',
      defaultValue: 'light',
      data: [
        { value: 'light', label: 'Light' },
        { value: 'filled', label: 'Filled' },
        { value: 'outline', label: 'Outline' },
        { value: 'dot', label: 'Dot' },
      ],
    },
  ],
};

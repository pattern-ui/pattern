import React from 'react';
import { Group, GroupProps, Button } from '@pattern-ui/core';

function Wrapper(props: GroupProps) {
  return (
    <Group {...props}>
      <Button variant="outline">1</Button>
      <Button variant="outline">2</Button>
      <Button variant="outline">3</Button>
    </Group>
  );
}

const codeTemplate = (props: string) => `
import { Group, Button } from '@pattern-ui/core';

export default function Demo() {
  return (
    <Group${props}>
      <Button variant="outline">1</Button>
      <Button variant="outline">2</Button>
      <Button variant="outline">3</Button>
    </Group>
  );
}
`;

export const control: PatternControlDemo = {
  type: 'control',
  component: Wrapper,
  codeTemplate,
  controls: [
    {
      name: 'position',
      type: 'select',
      data: [
        { label: 'left', value: 'left' },
        { label: 'center', value: 'center' },
        { label: 'right', value: 'right' },
        { label: 'apart', value: 'apart' },
      ],
      initialValue: 'left',
      defaultValue: 'left',
    },
    { name: 'spacing', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'grow', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};

import React from 'react';
import { Menu, MenuProps, Group } from '@pattern-ui/core';
import { menuItems } from './_menu-items';

function Wrapper(props: MenuProps) {
  return (
    <Group position="center" style={{ height: 200 }}>
      <Menu {...props}>{menuItems.slice(0, 3)}</Menu>
    </Group>
  );
}

const codeTemplate = (props: string) => `
import { Menu } from '@pattern-ui/core';

export default function Demo() {
  return (
    <Menu${props}>
      {/* Menu items */}
    </Menu>
  )
}
`;

export const control: PatternControlDemo = {
  type: 'control',
  component: Wrapper,
  codeTemplate,
  controls: [
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'shadow', type: 'size', initialValue: 'md', defaultValue: 'md' },
  ],
};

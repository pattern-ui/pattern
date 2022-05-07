import React from 'react';
import { Menu, Group } from '@pattern/core';
import { menuItems } from './_menu-items';

function Demo() {
  return (
    <Group position="center">
      <Menu trigger="hover" delay={500}>
        {menuItems}
      </Menu>
    </Group>
  );
}

export const hover: PatternDemo = {
  type: 'demo',
  component: Demo,
};

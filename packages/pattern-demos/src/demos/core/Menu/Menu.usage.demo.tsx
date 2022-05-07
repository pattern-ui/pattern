import React from 'react';
import { Group, Menu } from '@pattern/core';
import { menuItems } from './_menu-items';

function Demo() {
  return (
    <Group position="center">
      <Menu>{menuItems}</Menu>
    </Group>
  );
}

export const usage: PatternDemo = {
  type: 'demo',
  component: Demo,
};

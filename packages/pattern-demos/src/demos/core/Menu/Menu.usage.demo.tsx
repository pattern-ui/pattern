import React from 'react';
import { Group, Menu } from '@pattern/core';
import { menuItems } from './_menu-items';

export default function Demo() {
  return (
    <Group position="center">
      <Menu>{menuItems}</Menu>
    </Group>
  );
}

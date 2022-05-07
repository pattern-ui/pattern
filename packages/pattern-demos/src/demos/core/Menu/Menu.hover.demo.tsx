import React from 'react';
import { Menu, Group } from '@pattern/core';
import { menuItems } from './_menu-items';

export default function Demo() {
  return (
    <Group position="center">
      <Menu trigger="hover" delay={500}>
        {menuItems}
      </Menu>
    </Group>
  );
}

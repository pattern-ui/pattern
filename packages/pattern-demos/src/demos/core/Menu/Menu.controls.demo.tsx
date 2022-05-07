import React from 'react';
import { Menu, Group, Button } from '@pattern/core';
import { menuItems } from './_menu-items';

export default function Demo() {
  return (
    <Group position="center">
      <Menu control={<button type="button">Button control</button>}>{menuItems}</Menu>
      <Menu control={<Button>Pattern Button</Button>}>{menuItems}</Menu>
    </Group>
  );
}

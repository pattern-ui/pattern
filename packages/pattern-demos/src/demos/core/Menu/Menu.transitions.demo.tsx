import React from 'react';
import { Group, Menu } from '@pattern-ui/core';
import { menuItems } from './_menu-items';

export default function Demo() {
  return (
    <Group position="center">
      <Menu transition="rotate-right" transitionDuration={100} transitionTimingFunction="ease">
        {menuItems}
      </Menu>
    </Group>
  );
}

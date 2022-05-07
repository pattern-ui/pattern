import React from 'react';
import { Search } from 'tabler-icons-react';
import { Menu, Group } from '@pattern/core';
import { menuItems } from './_menu-items';

export default function Demo() {
  return (
    <Group position="center">
      <Menu>
        {menuItems.slice(0, 4)}
        <Menu.Item disabled icon={<Search size={14} />}>
          Search
        </Menu.Item>
        {menuItems.slice(5)}
      </Menu>
    </Group>
  );
}

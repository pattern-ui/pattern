import React from 'react';
import { ExternalLink } from 'tabler-icons-react';
import { Menu, Group } from '@pattern-ui/core';

export default function Demo() {
  return (
    <Group position="center">
      <Menu>
        <Menu.Item component="a" href="https://pattern.icu">
          Pattern website
        </Menu.Item>
        <Menu.Item
          icon={<ExternalLink size={14} />}
          component="a"
          href="https://pattern.icu"
          target="_blank"
        >
          External link
        </Menu.Item>
      </Menu>
    </Group>
  );
}

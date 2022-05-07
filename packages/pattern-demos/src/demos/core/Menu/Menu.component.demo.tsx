import React from 'react';
import { ExternalLink } from 'tabler-icons-react';
import { Menu, Group } from '@pattern/core';

function Demo() {
  return (
    <Group position="center">
      <Menu>
        <Menu.Item component="a" href="https://pattern-ui.design">
          Pattern website
        </Menu.Item>
        <Menu.Item
          icon={<ExternalLink size={14} />}
          component="a"
          href="https://pattern-ui.design"
          target="_blank"
        >
          External link
        </Menu.Item>
      </Menu>
    </Group>
  );
}

export const component: PatternDemo = {
  type: 'demo',
  component: Demo,
};

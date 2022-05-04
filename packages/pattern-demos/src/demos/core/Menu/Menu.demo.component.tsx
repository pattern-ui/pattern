import React from 'react';
import { ExternalLink } from 'tabler-icons-react';
import { Menu, Group } from '@pattern/core';

const code = `
import { Menu } from '@pattern/core';
import { ExternalLink } from 'tabler-icons-react';

function Demo() {
  return (
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
  );
}
`;

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
  code,
  component: Demo,
};

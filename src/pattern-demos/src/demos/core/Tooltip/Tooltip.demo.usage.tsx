import React from 'react';
import { Tooltip, Button, Group } from '@pattern/core';

const code = `
import { Tooltip, Button } from '@pattern/core';

function Demo() {
  return (
    <Tooltip label="Tooltip">
      <Button variant="outline">Button with tooltip</Button>
    </Tooltip>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Tooltip label="Tooltip">
        <Button variant="outline">Button with tooltip</Button>
      </Tooltip>
    </Group>
  );
}

export const usage: PatternDemo = {
  type: 'demo',
  component: Demo,
  code,
};

import React from 'react';
import { Tooltip, Button, Group } from '@pattern/core';

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
};

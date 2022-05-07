import React from 'react';
import { Button, Group } from '@pattern/core';

function Demo() {
  return (
    <Group position="center">
      <Button compact>Compact filled button</Button>
      <Button compact variant="light">
        Compact light button
      </Button>
      <Button compact variant="outline">
        Compact outline button
      </Button>
    </Group>
  );
}

export const compact: PatternDemo = {
  type: 'demo',
  component: Demo,
};

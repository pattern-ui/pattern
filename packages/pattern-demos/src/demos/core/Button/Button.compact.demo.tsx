import React from 'react';
import { Button, Group } from '@pattern/core';

export default function Demo() {
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

import React from 'react';
import { Tooltip, Button, Group } from '@pattern-ui/core';

export default function Demo() {
  return (
    <Tooltip.Group openDelay={500} closeDelay={100}>
      <Group position="center">
        <Tooltip label="Tooltip 1">
          <Button variant="outline">Button 1</Button>
        </Tooltip>
        <Tooltip label="Tooltip 2">
          <Button variant="outline">Button 2</Button>
        </Tooltip>
        <Tooltip label="Tooltip 3">
          <Button variant="outline">Button 3</Button>
        </Tooltip>
      </Group>
    </Tooltip.Group>
  );
}

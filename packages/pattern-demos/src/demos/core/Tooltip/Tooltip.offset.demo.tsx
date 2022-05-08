import React from 'react';
import { Tooltip, Group, Button } from '@pattern-ui/core';

export default function Demo() {
  return (
    <Group position="center">
      <Tooltip label="Default arrow" offset={20}>
        <Button variant="outline">20px offset</Button>
      </Tooltip>
      <Tooltip label="Arrow with size" offset={-10}>
        <Button variant="outline">-10px offset</Button>
      </Tooltip>
    </Group>
  );
}

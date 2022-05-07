import React from 'react';
import { Tooltip, Group, Button } from '@pattern/core';

const code = `
import { Tooltip, Button } from '@pattern/core';

function Demo() {
  return (
    <>
      <Tooltip label="Default arrow" offset={20}>
        <Button variant="outline">20px offset</Button>
      </Tooltip>
      <Tooltip label="Arrow with size" offset={-10}>
        <Button variant="outline">-10px offset</Button>
      </Tooltip>
    </>
  );
}

`;

export function Demo() {
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

export const offset: PatternDemo = {
  type: 'demo',
  component: Demo,
};

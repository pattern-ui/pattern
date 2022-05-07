import React from 'react';
import { Tooltip, Group, Button } from '@pattern/core';

const code = `
import { Tooltip, Button } from '@pattern/core';

function Demo() {
  return (
    <>
      <Tooltip label="Default arrow" withArrow>
        <Button variant="outline">Default arrow</Button>
      </Tooltip>

      <Tooltip label="Arrow with size" withArrow arrowSize={3}>
        <Button variant="outline">With size</Button>
      </Tooltip>
    </>
  );
}

`;

export function Demo() {
  return (
    <Group position="center">
      <Tooltip label="Default arrow" withArrow>
        <Button variant="outline">Default arrow</Button>
      </Tooltip>
      <Tooltip label="Arrow with size" withArrow arrowSize={3}>
        <Button variant="outline">With size</Button>
      </Tooltip>
    </Group>
  );
}

export const arrow: PatternDemo = {
  type: 'demo',
  component: Demo,
};

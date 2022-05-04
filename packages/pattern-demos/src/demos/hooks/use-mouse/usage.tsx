import React from 'react';
import { Text, Code } from '@pattern/core';
import { useMouse } from '@pattern/hooks';

const code = `
import { Text, Code } from '@pattern/core';
import { useMouse } from '@pattern/hooks';

function Demo() {
  const { x, y } = useMouse();

  return (
    <Text align="center">
      Mouse coordinates <Code>{\`{ x: \${x}, y: \${y} }\`}</Code>
    </Text>
  );
}`;

function Demo() {
  const { x, y } = useMouse();

  return (
    <Text align="center">
      Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
    </Text>
  );
}

export const useMouseUsage: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

import React from 'react';
import { Text, Code } from '@pattern/core';
import { useMouse } from '@pattern/hooks';

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
  component: Demo,
};

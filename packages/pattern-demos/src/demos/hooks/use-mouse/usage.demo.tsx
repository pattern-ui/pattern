import React from 'react';
import { Text, Code } from '@pattern-ui/core';
import { useMouse } from '@pattern-ui/hooks';

export default function Demo() {
  const { x, y } = useMouse();

  return (
    <Text align="center">
      Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
    </Text>
  );
}

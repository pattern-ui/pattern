import React from 'react';
import { Text, Code } from '@pattern/core';
import { useMouse } from '@pattern/hooks';

export default function Demo() {
  const { x, y } = useMouse();

  return (
    <Text align="center">
      Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
    </Text>
  );
}

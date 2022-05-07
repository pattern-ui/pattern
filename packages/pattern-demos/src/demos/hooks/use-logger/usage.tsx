import React, { useState } from 'react';
import { useLogger } from '@pattern/hooks';
import { Button, Group } from '@pattern/core';

function Demo() {
  const [count, setCount] = useState(0);
  useLogger('Demo', [{ count, hello: 'world' }]);

  return (
    <Group position="center">
      <Button onClick={() => setCount((c) => c + 1)}>Update state ({count})</Button>
    </Group>
  );
}

export const useLoggerDemo: PatternDemo = {
  type: 'demo',
  component: Demo,
};

import React, { useState } from 'react';
import { useLogger } from '@pattern-ui/hooks';
import { Button, Group } from '@pattern-ui/core';

export default function Demo() {
  const [count, setCount] = useState(0);
  useLogger('Demo', [{ count, hello: 'world' }]);

  return (
    <Group position="center">
      <Button onClick={() => setCount((c) => c + 1)}>Update state ({count})</Button>
    </Group>
  );
}

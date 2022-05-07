import React, { useState, useCallback } from 'react';
import { Button, Group } from '@pattern-ui/core';
import { useEventListener } from '@pattern-ui/hooks';

export default function Demo() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1), []);
  const ref = useEventListener('click', increment);

  return (
    <Group position="center">
      <Button ref={ref}>Button clicks: {count}</Button>
    </Group>
  );
}

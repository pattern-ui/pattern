import React from 'react';
import { Button, Group } from '@pattern-ui/core';
import { useToggle, upperFirst } from '@pattern-ui/hooks';

export default function Demo() {
  const [value, toggle] = useToggle('blue', ['blue', 'orange']);

  return (
    <Group position="center">
      <Button color={value} onClick={() => toggle()}>
        {upperFirst(value)}
      </Button>
    </Group>
  );
}

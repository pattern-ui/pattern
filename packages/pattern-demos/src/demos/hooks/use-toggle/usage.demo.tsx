import React from 'react';
import { Button, Group } from '@pattern/core';
import { useToggle, upperFirst } from '@pattern/hooks';

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

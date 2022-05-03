import React from 'react';
import { Button, Group } from '@pattern/core';
import { useToggle, upperFirst } from '@pattern/hooks';

const code = `
import { Button } from '@pattern/core';
import { useToggle } from '@pattern/hooks';

function Demo() {
  const [value, toggle] = useToggle('blue', ['blue', 'orange']);

  return (
    <Button color={value} onClick={() => toggle()}>
      {value}
    </Button>
  );
}
`;

function Demo() {
  const [value, toggle] = useToggle('blue', ['blue', 'orange']);

  return (
    <Group position="center">
      <Button color={value} onClick={() => toggle()}>
        {upperFirst(value)}
      </Button>
    </Group>
  );
}

export const useToggleDemo: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

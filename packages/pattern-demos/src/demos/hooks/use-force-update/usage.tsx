import React from 'react';
import { Button, Text, Group } from '@pattern/core';
import { useForceUpdate, randomId } from '@pattern/hooks';

function Demo() {
  const forceUpdate = useForceUpdate();

  return (
    <Group position="center">
      <Text>{randomId()}</Text>
      <Button onClick={forceUpdate}>Force update</Button>
    </Group>
  );
}

export const useForceUpdateDemo: PatternDemo = {
  type: 'demo',
  component: Demo,
};

import React from 'react';
import { Button, Text, Group } from '@pattern-ui/core';
import { useForceUpdate, randomId } from '@pattern-ui/hooks';

export default function Demo() {
  const forceUpdate = useForceUpdate();

  return (
    <Group position="center">
      <Text>{randomId()}</Text>
      <Button onClick={forceUpdate}>Force update</Button>
    </Group>
  );
}

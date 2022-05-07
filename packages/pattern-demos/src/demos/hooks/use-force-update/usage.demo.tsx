import React from 'react';
import { Button, Text, Group } from '@pattern/core';
import { useForceUpdate, randomId } from '@pattern/hooks';

export default function Demo() {
  const forceUpdate = useForceUpdate();

  return (
    <Group position="center">
      <Text>{randomId()}</Text>
      <Button onClick={forceUpdate}>Force update</Button>
    </Group>
  );
}

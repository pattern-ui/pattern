import React from 'react';
import { Group, Badge } from '@pattern-ui/core';
import { useIdle } from '@pattern-ui/hooks';

export default function Demo() {
  const idle = useIdle(2000, { events: ['click', 'touchstart'] });

  return (
    <Group position="center">
      <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>
    </Group>
  );
}

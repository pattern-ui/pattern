import React from 'react';
import { Group, Badge } from '@pattern/core';
import { useIdle } from '@pattern/hooks';

const eventsCode = `
import { Badge } from '@pattern/core';
import { useIdle } from '@pattern/hooks';

function Demo() {
  const idle = useIdle(2000, { events: ['click', 'touchstart'] });
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;

function EventsDemo() {
  const idle = useIdle(2000, { events: ['click', 'touchstart'] });

  return (
    <Group position="center">
      <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>
    </Group>
  );
}

export const useIdleEvents: PatternDemo = {
  type: 'demo',
  code: eventsCode,
  component: EventsDemo,
};

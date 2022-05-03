import React from 'react';
import { Group, Badge } from '@pattern/core';
import { useIdle } from '@pattern/hooks';

const code = `
import { Badge } from '@pattern/core';
import { useIdle } from '@pattern/hooks';

function Demo() {
  const idle = useIdle(2000);
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;

function Demo() {
  const idle = useIdle(2000);

  return (
    <Group position="center">
      <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>
    </Group>
  );
}

export const useIdleDemo: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

import React from 'react';
import { RingProgress, Group } from '@pattern/core';

function Demo() {
  return (
    <Group position="center">
      <RingProgress
        sections={[
          { value: 40, color: '#68b5e8' },
          { value: 15, color: '#6888e8' },
          { value: 15, color: '#8468e8' },
        ]}
      />
    </Group>
  );
}

export const colors: PatternDemo = {
  type: 'demo',
  component: Demo,
};

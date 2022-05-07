import React from 'react';
import { Group, Badge } from '@pattern/core';
import { useReducedMotion } from '@pattern/hooks';

function Demo() {
  const reduceMotion = useReducedMotion();
  return (
    <Group position="center">
      <Badge
        color={reduceMotion ? 'red' : 'teal'}
        style={{ transitionDuration: reduceMotion ? '0ms' : '200ms' }}
        variant="filled"
      >
        {reduceMotion ? 'You prefer to reduce motion' : 'You prefer not to reduce motion'}
      </Badge>
    </Group>
  );
}

export const useReducedMotionDemo: PatternDemo = {
  type: 'demo',
  component: Demo,
};

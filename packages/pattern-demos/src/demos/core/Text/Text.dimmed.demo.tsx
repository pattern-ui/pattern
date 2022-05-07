import React from 'react';
import { Text } from '@pattern/core';

function Demo() {
  return <Text color="dimmed">Dimmed text</Text>;
}

export const dimmed: PatternDemo = {
  type: 'demo',
  component: Demo,
};

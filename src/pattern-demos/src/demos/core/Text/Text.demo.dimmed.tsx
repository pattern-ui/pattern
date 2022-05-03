import React from 'react';
import { Text } from '@pattern/core';

const code = `
import { Text } from '@pattern/core';

function Demo() {
  return <Text color="dimmed">Dimmed text</Text>;
}
`;

function Demo() {
  return <Text color="dimmed">Dimmed text</Text>;
}

export const dimmed: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

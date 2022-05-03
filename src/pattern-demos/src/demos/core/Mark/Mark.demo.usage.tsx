import React from 'react';
import { Mark, Text } from '@pattern/core';

const code = `
import { Mark, Text } from '@pattern/core';

function Demo() {
  return (
    <Text>
      Thanks for stopping by and checking out <Mark>Pattern</Mark>, you are awesome!
    </Text>
  );
}
`;

function Demo() {
  return (
    <Text>
      Thanks for stopping by and checking out <Mark>Pattern</Mark>, you are awesome!
    </Text>
  );
}

export const usage: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

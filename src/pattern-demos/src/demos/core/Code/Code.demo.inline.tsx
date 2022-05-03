import React from 'react';
import { Code } from '@pattern/core';

const code = `
import { Code } from '@pattern/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}
`;

function Demo() {
  return <Code>React.createElement()</Code>;
}

export const inline: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

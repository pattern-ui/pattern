import React from 'react';
import { Code } from '@pattern/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}

export const inline: PatternDemo = {
  type: 'demo',
  component: Demo,
};

import React from 'react';
import { Code } from '@pattern/core';

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}

export const block: PatternDemo = {
  type: 'demo',
  component: Demo,
};

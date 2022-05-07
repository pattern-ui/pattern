import React from 'react';
import { Progress } from '@pattern/core';

const code = `
import { Progress } from '@pattern/core';

function Demo() {
  return <Progress value={75} animate />;
}
`;

function Label() {
  return <Progress value={75} animate />;
}

export const animations: PatternDemo = {
  type: 'demo',
  component: Label,
};

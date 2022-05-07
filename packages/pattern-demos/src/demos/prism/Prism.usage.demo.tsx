import React from 'react';
import { Prism } from '@pattern/prism';

export const demoCode = `
import { Button } from '@pattern/core';

function Demo() {
  return <Button>Hello</Button>
}
`;

function Demo() {
  return <Prism language="tsx">{demoCode}</Prism>;
}

export const usage: PatternDemo = {
  type: 'demo',
  component: Demo,
};

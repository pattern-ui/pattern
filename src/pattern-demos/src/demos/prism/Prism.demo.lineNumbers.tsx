import React from 'react';
import { Prism } from '@pattern/prism';

const demoCode = `
import { Button } from '@pattern/core';

function Demo() {
  return <Button>Hello</Button>
}
`;

const code = `
import { Prism } from '@pattern/prism';

function Demo() {
  return <Prism withLineNumbers language="tsx">{/* ...code */}</Prism>;
}
`;

function Demo() {
  return (
    <Prism language="tsx" withLineNumbers>
      {demoCode}
    </Prism>
  );
}

export const lineNumbers: PatternDemo = {
  type: 'demo',
  component: Demo,
  code,
};

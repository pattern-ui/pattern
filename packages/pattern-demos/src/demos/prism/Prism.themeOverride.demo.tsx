import React from 'react';
import { Prism } from '@pattern/prism';

const demoCode = `
import { Button } from '@pattern/core';

function Demo() {
  return <Button>Hello</Button>
}
`;

function Demo() {
  return (
    <Prism language="tsx" colorScheme="dark">
      {demoCode}
    </Prism>
  );
}

export const themeOverride: PatternDemo = {
  type: 'demo',
  component: Demo,
};

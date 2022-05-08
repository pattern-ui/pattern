import React from 'react';
import { Prism } from '@pattern-ui/prism';

const demoCode = `
import { Button } from '@pattern-ui/core';

export default function Demo() {
  return <Button>Hello</Button>
}
`;

export default function Demo() {
  return (
    <Prism language="tsx" withLineNumbers>
      {demoCode}
    </Prism>
  );
}

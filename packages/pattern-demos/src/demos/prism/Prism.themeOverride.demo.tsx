import React from 'react';
import { Prism } from '@pattern/prism';

const demoCode = `
import { Button } from '@pattern/core';

export default function Demo() {
  return <Button>Hello</Button>
}
`;

export default function Demo() {
  return (
    <Prism language="tsx" colorScheme="dark">
      {demoCode}
    </Prism>
  );
}

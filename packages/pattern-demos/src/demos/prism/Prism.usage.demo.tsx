import React from 'react';
import { Prism } from '@pattern-ui/prism';

export const demoCode = `
import { Button } from '@pattern-ui/core';

function Demo() {
  return <Button>Hello</Button>
}
`;

export default function Demo() {
  return <Prism language="tsx">{demoCode}</Prism>;
}

import React from 'react';
import { Prism } from '@pattern/prism';

export const demoCode = `
import { Button } from '@pattern/core';

function Demo() {
  return <Button>Hello</Button>
}
`;

export default function Demo() {
  return <Prism language="tsx">{demoCode}</Prism>;
}

import React from 'react';
import { Kbd } from '@pattern/core';

const code = `
import { Kbd } from '@pattern/core';

function Demo() {
  return (
    <>
      <Kbd>⌘</Kbd> + <Kbd>shift</Kbd> + <Kbd>M</Kbd>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Kbd>⌘</Kbd> + <Kbd>shift</Kbd> + <Kbd>M</Kbd>
    </>
  );
}

export const usage: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

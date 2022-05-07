import React from 'react';
import { Kbd } from '@pattern/core';

function Demo() {
  return (
    <>
      <Kbd>⌘</Kbd> + <Kbd>shift</Kbd> + <Kbd>M</Kbd>
    </>
  );
}

export const usage: PatternDemo = {
  type: 'demo',
  component: Demo,
};

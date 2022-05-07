import React from 'react';
import { Divider } from '@pattern/core';

function Demo() {
  return (
    <>
      <Divider my="sm" />
      <Divider my="sm" variant="dashed" />
      <Divider my="sm" variant="dotted" />
    </>
  );
}

export const usage: PatternDemo = {
  type: 'demo',
  component: Demo,
};

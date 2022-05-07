import React from 'react';
import { Input } from '@pattern/core';

function Demo() {
  return (
    <>
      <Input variant="default" placeholder="Default variant" />
      <Input style={{ marginTop: 15 }} variant="filled" placeholder="Filled variant" />
      <Input style={{ marginTop: 15 }} variant="unstyled" placeholder="Unstyled variant" />
    </>
  );
}

export const variants: PatternDemo = {
  type: 'demo',
  component: Demo,
};

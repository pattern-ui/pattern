import React from 'react';
import { Anchor } from '@pattern/core';

function Demo() {
  return (
    <Anchor href="https://pattern-ui.design/" target="_blank">
      Pattern docs
    </Anchor>
  );
}

export const usage: PatternDemo = {
  type: 'demo',
  component: Demo,
};

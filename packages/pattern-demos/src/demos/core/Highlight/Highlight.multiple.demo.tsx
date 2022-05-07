import React from 'react';
import { Highlight } from '@pattern/core';

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}

export const multiple: PatternDemo = {
  type: 'demo',
  component: Demo,
};

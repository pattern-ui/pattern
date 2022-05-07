import React from 'react';
import { Wrapper } from './_wrapper';

function Demo() {
  return <Wrapper transitionDuration={0} />;
}

export const transitions: PatternDemo = {
  type: 'demo',
  component: Demo,
};

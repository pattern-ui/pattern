import React from 'react';
import { PinInput } from '@pattern/labs';

function Demo() {
  return <PinInput length={4} />;
}

export const usage: PatternDemo = {
  type: 'demo',
  component: Demo,
};

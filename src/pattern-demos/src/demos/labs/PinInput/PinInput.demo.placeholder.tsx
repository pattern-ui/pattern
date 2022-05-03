import React from 'react';
import { PinInput } from '@pattern/labs';

function Demo() {
  return <PinInput length={4} placeholder="⭐️" />;
}

export const placeholder: PatternDemo = {
  type: 'demo',
  component: Demo,
};

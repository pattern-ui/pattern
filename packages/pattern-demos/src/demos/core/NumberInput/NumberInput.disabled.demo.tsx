import React from 'react';
import { NumberInput } from '@pattern/core';

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <NumberInput label="Enter your age" placeholder="Your age" disabled value={20} />
    </div>
  );
}

export const disabled: PatternDemo = {
  type: 'demo',
  component: Demo,
};

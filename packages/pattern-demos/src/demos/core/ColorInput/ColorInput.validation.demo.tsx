import React from 'react';
import { ColorInput } from '@pattern/core';

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <ColorInput label="Your favorite color" placeholder="Enter color" error />

      <ColorInput
        style={{ marginTop: 15 }}
        label="Your favorite color"
        placeholder="Enter color"
        error="You cannot pick white"
      />
    </div>
  );
}

export const validation: PatternDemo = {
  type: 'demo',
  component: Demo,
};

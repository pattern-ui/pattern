import React from 'react';
import { ColorInput } from '@pattern/core';

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <ColorInput placeholder="Pick color" label="Your favorite color" defaultValue="#ffffff" />
    </div>
  );
}

export const usage: PatternDemo = {
  type: 'demo',
  component: Demo,
};

import React from 'react';
import { ColorInput, DEFAULT_THEME } from '@pattern/core';

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <ColorInput
        placeholder="Pick color"
        label="Your favorite color"
        swatches={Object.keys(DEFAULT_THEME.colors).map((color) => DEFAULT_THEME.colors[color][6])}
      />
    </div>
  );
}

export const swatches: PatternDemo = {
  type: 'demo',
  component: Demo,
};

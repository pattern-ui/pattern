import React from 'react';
import { NumberInput } from '@pattern/core';

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <NumberInput
        decimalSeparator=","
        label="Number input with a custom decimal separator"
        placeholder="Decimal separator"
        defaultValue={0.5}
        precision={2}
        step={0.5}
      />
    </div>
  );
}

export const decimalSeparator: PatternDemo = {
  type: 'demo',
  component: Demo,
};

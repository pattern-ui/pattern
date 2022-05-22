import React from 'react';
import { NumberInput } from '@pattern-ui/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <NumberInput
        decimalSeparator=","
        placeholder="Decimal separator"
        defaultValue={0.5}
        precision={2}
        step={0.5}
      />
    </div>
  );
}

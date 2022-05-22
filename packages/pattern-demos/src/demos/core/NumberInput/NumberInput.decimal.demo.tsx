import React from 'react';
import { NumberInput } from '@pattern-ui/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <NumberInput
        placeholder="Decimal steps"
        defaultValue={0.05}
        precision={2}
        min={-1}
        step={0.05}
        max={1}
      />
    </div>
  );
}

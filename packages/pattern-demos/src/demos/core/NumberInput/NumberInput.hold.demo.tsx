import React from 'react';
import { NumberInput } from '@pattern-ui/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 420, margin: 'auto' }}>
      <NumberInput
        label="Step on hold"
        description="Step the value when clicking and holding the arrows"
        placeholder="Hold mouse down on control button"
        stepHoldDelay={500}
        stepHoldInterval={100}
      />
      <NumberInput
        mt="md"
        label="Step the value with interval function"
        description="Step value will increase incrementally when control is hold"
        placeholder="Hold mouse down on control button"
        stepHoldDelay={500}
        stepHoldInterval={(t) => Math.max(1000 / t ** 2, 25)}
      />
    </div>
  );
}

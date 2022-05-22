import React from 'react';
import { NumberInput } from '@pattern-ui/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 420, margin: 'auto' }}>
      <NumberInput placeholder="Your age" max={120} min={0} />
      <NumberInput mt="md" placeholder="Your weight in kg" defaultValue={80} step={5} min={0} />
    </div>
  );
}

import React from 'react';
import { NumberInput } from '@pattern-ui/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 420, margin: 'auto' }}>
      <NumberInput placeholder="Controls are visible" />

      <NumberInput style={{ marginTop: 15 }} hideControls placeholder="Controls are disabled" />
      <NumberInput style={{ marginTop: 15 }} disabled placeholder="Input disabled" />
    </div>
  );
}

import React from 'react';
import { ColorInput } from '@pattern-ui/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <ColorInput placeholder="Your favorite color" disabled />

      <ColorInput
        style={{ marginTop: 15 }}
        placeholder="Your favorite color"
        disabled
        value="#EFD679"
      />
    </div>
  );
}

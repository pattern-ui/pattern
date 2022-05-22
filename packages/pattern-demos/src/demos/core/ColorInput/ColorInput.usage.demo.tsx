import React from 'react';
import { ColorInput } from '@pattern-ui/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <ColorInput placeholder="Pick color" defaultValue="#ffffff" />
    </div>
  );
}

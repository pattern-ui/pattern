import React from 'react';
import { TextInput } from '@pattern-ui/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TextInput placeholder="you@email.com" invalid />
    </div>
  );
}

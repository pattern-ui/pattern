import React from 'react';
import { TextInput } from '@pattern/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TextInput label="Your email" placeholder="you@email.com" error />

      <TextInput
        style={{ marginTop: 15 }}
        label="Your email"
        placeholder="you@email.com"
        error="Invalid email"
      />
    </div>
  );
}

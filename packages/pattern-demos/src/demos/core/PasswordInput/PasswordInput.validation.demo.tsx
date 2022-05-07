import React from 'react';
import { PasswordInput } from '@pattern-ui/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <PasswordInput label="Your password" placeholder="Your password" error />

      <PasswordInput
        style={{ marginTop: 15 }}
        label="Your password"
        placeholder="Your password"
        error="Invalid password"
      />
    </div>
  );
}

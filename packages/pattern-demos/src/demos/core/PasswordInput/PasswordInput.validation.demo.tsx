import React from 'react';
import { PasswordInput } from '@pattern/core';

function Demo() {
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

export const validation: PatternDemo = {
  type: 'demo',
  component: Demo,
};

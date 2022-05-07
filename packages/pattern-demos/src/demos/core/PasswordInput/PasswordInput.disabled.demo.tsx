import React from 'react';
import { PasswordInput } from '@pattern/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <PasswordInput label="Disabled without value" placeholder="Your password" disabled />

      <PasswordInput
        mt="md"
        label="Disabled with value"
        placeholder="Your password"
        disabled
        value="secret"
      />
    </div>
  );
}

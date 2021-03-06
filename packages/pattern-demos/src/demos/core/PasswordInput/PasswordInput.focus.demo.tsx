import React from 'react';
import { PasswordInput } from '@pattern-ui/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 360, margin: 'auto' }}>
      <PasswordInput placeholder="Toggle button is not focusable" toggleTabIndex={-1} />

      <PasswordInput
        placeholder="Toggle button is focusable"
        toggleTabIndex={0}
        style={{ marginTop: 15 }}
      />
    </div>
  );
}

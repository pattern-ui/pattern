import React from 'react';
import { EyeCheck, EyeOff } from 'tabler-icons-react';
import { PasswordInput } from '@pattern/core';

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <PasswordInput
        label="Change visibility toggle icon"
        placeholder="Change visibility toggle icon"
        defaultValue="secret"
        visibilityToggleIcon={({ reveal, size }) =>
          reveal ? <EyeOff size={size} /> : <EyeCheck size={size} />
        }
      />
    </div>
  );
}

export const visibilityIcon: PatternDemo = {
  type: 'demo',
  component: Demo,
};

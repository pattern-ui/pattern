import React from 'react';
import { Lock } from 'tabler-icons-react';
import { PasswordInput } from '@pattern-ui/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <PasswordInput placeholder="Your password" icon={<Lock size={16} />} />
    </div>
  );
}

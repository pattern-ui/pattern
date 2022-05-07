import React from 'react';
import { Lock } from 'tabler-icons-react';
import { PasswordInput } from '@pattern/core';

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <PasswordInput label="Your password" placeholder="Your password" icon={<Lock size={16} />} />
    </div>
  );
}

export const icon: PatternDemo = {
  type: 'demo',
  component: Demo,
};

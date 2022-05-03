import React from 'react';
import { Lock } from 'tabler-icons-react';
import { PasswordInput } from '@pattern/core';

const code = `
import { PasswordInput } from '@pattern/core';
import { Lock } from 'tabler-icons-react';

function Demo() {
  return <PasswordInput label="Your password" placeholder="Your password" icon={<Lock size={16} />} />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <PasswordInput label="Your password" placeholder="Your password" icon={<Lock size={16} />} />
    </div>
  );
}

export const icon: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

import React from 'react';
import { At } from 'tabler-icons-react';
import { TextInput } from '@pattern-ui/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TextInput placeholder="Your email" icon={<At size={14} />} />
    </div>
  );
}

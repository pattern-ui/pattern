import React from 'react';
import { Paint } from 'tabler-icons-react';
import { ColorInput } from '@pattern-ui/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <ColorInput placeholder="No color preview" withPreview={false} />

      <ColorInput mt="md" icon={<Paint size={16} />} placeholder="With icon" />
    </div>
  );
}

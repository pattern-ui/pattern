import React from 'react';
import { Medal } from 'tabler-icons-react';
import { NumberInput } from '@pattern-ui/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <NumberInput
        placeholder="Age when you graduated"
        defaultValue={22}
        min={0}
        max={120}
        icon={<Medal size={18} />}
      />
    </div>
  );
}

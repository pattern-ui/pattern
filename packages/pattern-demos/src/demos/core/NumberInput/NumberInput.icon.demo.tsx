import React from 'react';
import { Medal } from 'tabler-icons-react';
import { NumberInput } from '@pattern/core';

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <NumberInput
        label="Age when you graduated"
        placeholder="Age when you graduated"
        defaultValue={22}
        min={0}
        max={120}
        icon={<Medal size={18} />}
      />
    </div>
  );
}

export const icon: PatternDemo = {
  type: 'demo',
  component: Demo,
};

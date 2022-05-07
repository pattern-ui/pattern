import React from 'react';
import { NumberInput } from '@pattern/core';

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <NumberInput label="Your age" defaultValue={20} error placeholder="Invalid without error" />
      <NumberInput
        style={{ marginTop: 15 }}
        defaultValue={20}
        placeholder="Invalid with error"
        label="Your age"
        error="You must be at least 21"
      />
    </div>
  );
}

export const validation: PatternDemo = {
  type: 'demo',
  component: Demo,
};

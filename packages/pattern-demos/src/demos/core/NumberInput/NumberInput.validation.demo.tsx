import React from 'react';
import { NumberInput } from '@pattern-ui/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <NumberInput defaultValue={20} error placeholder="Invalid without error" />
      <NumberInput
        style={{ marginTop: 15 }}
        defaultValue={20}
        placeholder="Invalid with error"
        error="You must be at least 21"
      />
    </div>
  );
}

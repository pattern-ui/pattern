import React from 'react';
import { TimeInput } from '@pattern/dates';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TimeInput label="Disabled without value" disabled />
      <TimeInput label="Disabled with value" disabled defaultValue={new Date()} mt="md" />
    </div>
  );
}

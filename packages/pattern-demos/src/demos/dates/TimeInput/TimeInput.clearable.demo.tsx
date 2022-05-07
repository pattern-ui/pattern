import React from 'react';
import { TimeInput } from '@pattern/dates';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TimeInput label="With a clear button" clearable defaultValue={new Date()} />
    </div>
  );
}

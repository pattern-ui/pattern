import React from 'react';
import { TimeInput } from '@pattern-ui/dates';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TimeInput label="Pick time" placeholder="Pick time" error defaultValue={new Date()} />

      <TimeInput
        style={{ marginTop: 15 }}
        label="Pick time"
        placeholder="Pick time"
        error="It is not a valid time"
        defaultValue={new Date()}
      />
    </div>
  );
}

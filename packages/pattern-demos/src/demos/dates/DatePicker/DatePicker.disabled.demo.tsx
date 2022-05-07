import React from 'react';
import { DatePicker } from '@pattern-ui/dates';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker label="Disabled without value" placeholder="Your birthday" disabled />

      <DatePicker
        mt="md"
        label="Disabled with value"
        placeholder="Your birthday"
        disabled
        value={new Date()}
      />
    </div>
  );
}

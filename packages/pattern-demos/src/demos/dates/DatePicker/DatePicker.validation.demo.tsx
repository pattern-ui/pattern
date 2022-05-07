import React from 'react';
import { DatePicker } from '@pattern/dates';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker label="Your birthday" placeholder="Your birthday" error />

      <DatePicker
        style={{ marginTop: 15 }}
        label="Your birthday"
        placeholder="Your birthday"
        error="You must be at least 18 to register"
      />
    </div>
  );
}

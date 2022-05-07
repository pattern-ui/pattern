import React from 'react';
import { DatePicker } from '@pattern/dates';

export default function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker placeholder="Pick date" label="Event date" clearable={false} />
    </div>
  );
}

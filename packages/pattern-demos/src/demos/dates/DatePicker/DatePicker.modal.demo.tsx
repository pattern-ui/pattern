import React from 'react';
import { DatePicker } from '@pattern/dates';

export default function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker dropdownType="modal" placeholder="Pick date" label="Event date" />
    </div>
  );
}

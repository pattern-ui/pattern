import React from 'react';
import { DatePicker } from '@pattern/dates';

export default function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker
        label="Sunday as first day of week"
        placeholder="Pick date"
        firstDayOfWeek="sunday"
      />
    </div>
  );
}

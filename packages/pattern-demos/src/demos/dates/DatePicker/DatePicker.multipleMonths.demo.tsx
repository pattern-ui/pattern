import React from 'react';
import { DatePicker } from '@pattern-ui/dates';

export default function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker amountOfMonths={2} placeholder="Two months" />
      <DatePicker amountOfMonths={3} placeholder="Three months" mt="md" />
    </div>
  );
}

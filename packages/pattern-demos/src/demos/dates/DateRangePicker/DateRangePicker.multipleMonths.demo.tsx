import React from 'react';
import { DateRangePicker } from '@pattern-ui/dates';

export default function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DateRangePicker amountOfMonths={2} placeholder="Two months" />
      <DateRangePicker amountOfMonths={3} placeholder="Three months" mt="md" />
    </div>
  );
}

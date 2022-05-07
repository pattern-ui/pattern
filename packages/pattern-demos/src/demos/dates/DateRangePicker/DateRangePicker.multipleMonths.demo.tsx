import React from 'react';
import { DateRangePicker } from '@pattern-ui/dates';

export default function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DateRangePicker amountOfMonths={2} label="2 months" placeholder="Two months" />
      <DateRangePicker amountOfMonths={3} label="3 months" placeholder="Three months" mt="md" />
    </div>
  );
}
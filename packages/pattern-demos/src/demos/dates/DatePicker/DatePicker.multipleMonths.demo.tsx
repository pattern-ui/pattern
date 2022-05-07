import React from 'react';
import { DatePicker } from '@pattern/dates';

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker amountOfMonths={2} label="2 months" placeholder="Two months" />
      <DatePicker amountOfMonths={3} label="3 months" placeholder="Three months" mt="md" />
    </div>
  );
}

export const multipleMonths: PatternDemo = {
  type: 'demo',
  component: Demo,
};

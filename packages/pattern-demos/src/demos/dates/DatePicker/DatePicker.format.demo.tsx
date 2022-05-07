import React from 'react';
import { DatePicker } from '@pattern/dates';

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker
        placeholder="Pick date"
        label="Event date"
        inputFormat="MM/DD/YYYY"
        labelFormat="MM/YYYY"
        defaultValue={new Date()}
      />
    </div>
  );
}

export const format: PatternDemo = {
  type: 'demo',
  component: Demo,
};

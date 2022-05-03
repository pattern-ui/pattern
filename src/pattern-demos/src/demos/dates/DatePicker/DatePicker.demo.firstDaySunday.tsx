import React from 'react';
import { DatePicker } from '@pattern/dates';

const code = `
import { DatePicker } from '@pattern/dates';

function Demo() {
  return (
    <DatePicker
      label="Sunday as first day of week"
      placeholder="Pick date"
      firstDayOfWeek="sunday"
    />
  );
}
`;

function Demo() {
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

export const firstDaySunday: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

import React from 'react';
import { DatePicker } from '@pattern/dates';

const code = `
import { DatePicker } from '@pattern/dates';

function Demo() {
  return <DatePicker allowFreeInput placeholder="Pick date" label="Event date" required />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker placeholder="Pick date" label="Event date" required allowFreeInput />
    </div>
  );
}

export const freeInput: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

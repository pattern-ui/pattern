import React from 'react';
import { Calendar } from 'tabler-icons-react';
import { DatePicker } from '@pattern/dates';

const code = `
import { DatePicker } from '@pattern/dates';
import { Calendar } from 'tabler-icons-react';

function Demo() {
  return (
    <DatePicker
      placeholder="Pick date"
      label="Event date"
      icon={<Calendar size={16} />}
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker placeholder="Pick date" label="Event date" icon={<Calendar size={16} />} />
    </div>
  );
}

export const icon: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

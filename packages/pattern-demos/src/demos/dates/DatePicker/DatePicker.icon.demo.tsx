import React from 'react';
import { Calendar } from 'tabler-icons-react';
import { DatePicker } from '@pattern-ui/dates';

export default function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker placeholder="Pick date" label="Event date" icon={<Calendar size={16} />} />
    </div>
  );
}

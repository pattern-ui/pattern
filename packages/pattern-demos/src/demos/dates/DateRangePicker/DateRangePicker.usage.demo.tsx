import React, { useState } from 'react';
import { DateRangePicker } from '@pattern/dates';

export default function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([
    new Date(2021, 11, 1),
    new Date(2021, 11, 5),
  ]);
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DateRangePicker
        label="Book hotel"
        placeholder="Pick dates range"
        value={value}
        onChange={setValue}
      />
    </div>
  );
}

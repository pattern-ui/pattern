import React, { useState } from 'react';
import dayjs from 'dayjs';
import { TimeRangeInput } from '@pattern-ui/dates';

export default function Demo() {
  const now = new Date();
  const then = dayjs(now).add(30, 'minutes').toDate();
  const [value, setValue] = useState<[Date, Date]>([now, then]);

  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <TimeRangeInput value={value} onChange={setValue} clearable />
    </div>
  );
}

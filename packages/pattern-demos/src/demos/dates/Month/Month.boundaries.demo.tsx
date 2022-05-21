import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Group } from '@pattern-ui/core';
import { Month } from '@pattern-ui/dates';

export default function Demo() {
  const initialDate = dayjs(new Date()).startOf('month').add(10, 'days').toDate();
  const [value, setValue] = useState(initialDate);

  return (
    <Group position="center">
      <Month
        month={value}
        value={value}
        onChange={setValue}
        minDate={dayjs(new Date()).startOf('month').add(5, 'days').toDate()}
        maxDate={dayjs(new Date()).endOf('month').subtract(5, 'days').toDate()}
      />
    </Group>
  );
}

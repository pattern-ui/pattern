import React, { useState } from 'react';
import { Group } from '@pattern-ui/core';
import { Calendar } from '@pattern-ui/dates';

export default function Demo() {
  const [value, setValue] = useState(null);
  return (
    <Group position="center">
      <Calendar
        value={value}
        onChange={setValue}
        excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
      />
    </Group>
  );
}

import React, { useState } from 'react';
import { Group } from '@pattern-ui/core';
import { Month } from '@pattern-ui/dates';

export default function Demo() {
  const [value, setValue] = useState(new Date());
  return (
    <Group position="center">
      <Month
        month={value}
        value={value}
        onChange={setValue}
        excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
      />
    </Group>
  );
}

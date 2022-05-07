import React, { useState } from 'react';
import { Group, Indicator } from '@pattern-ui/core';
import { Calendar } from '@pattern-ui/dates';

export default function Demo() {
  const [value, setValue] = useState(null);
  return (
    <Group position="center">
      <Calendar
        value={value}
        onChange={setValue}
        renderDay={(date) => {
          const day = date.getDate();
          return (
            <Indicator size={6} color="red" offset={8} disabled={day !== 16}>
              <div>{day}</div>
            </Indicator>
          );
        }}
      />
    </Group>
  );
}

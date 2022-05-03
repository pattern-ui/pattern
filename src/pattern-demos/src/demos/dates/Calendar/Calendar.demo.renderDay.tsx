import React, { useState } from 'react';
import { Group, Indicator } from '@pattern/core';
import { Calendar } from '@pattern/dates';

const code = `
import { useState } from 'react';
import { Calendar } from '@pattern/dates';
import { Indicator } from '@pattern/core';

function Demo() {
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
`;

function Demo() {
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

export const renderDay: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

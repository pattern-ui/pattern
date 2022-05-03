import React, { useState } from 'react';
import { Group } from '@pattern/core';
import { Month } from '@pattern/dates';

const code = `
import { useState } from 'react';
import { Month } from '@pattern/dates';

function Demo() {
  const [value, setValue] = useState(new Date());
  return (
    <Month
      month={value}
      value={value}
      onChange={setValue}
      excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
    />
  );
}
`;

function Demo() {
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

export const exclude: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

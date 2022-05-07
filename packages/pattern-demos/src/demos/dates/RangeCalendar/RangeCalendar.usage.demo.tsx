import React, { useState } from 'react';
import { Group } from '@pattern/core';
import { RangeCalendar } from '@pattern/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([
    new Date(2021, 11, 1),
    new Date(2021, 11, 5),
  ]);
  return (
    <Group position="center">
      <RangeCalendar value={value} onChange={setValue} />
    </Group>
  );
}

export const usage: PatternDemo = {
  type: 'demo',
  component: Demo,
};

import React, { useState } from 'react';
import { Group } from '@pattern/core';
import { Month } from '@pattern/dates';

function Demo() {
  const [value, setValue] = useState(new Date());
  return (
    <Group position="center">
      <Month month={value} value={value} onChange={setValue} />
    </Group>
  );
}

export const usage: PatternDemo = {
  type: 'demo',
  component: Demo,
};

import React from 'react';
import { Group } from '@pattern/core';
import { Month } from '@pattern/dates';

const code = `
import { Month } from '@pattern/dates';

function Demo() {
  return <Month hideWeekdays month={new Date()} />;
}
`;

function Demo() {
  return (
    <Group position="center">
      <Month month={new Date()} hideWeekdays />
    </Group>
  );
}

export const weekdays: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

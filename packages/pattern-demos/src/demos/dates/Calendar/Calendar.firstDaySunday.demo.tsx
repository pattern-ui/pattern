import React from 'react';
import { Group } from '@pattern/core';
import { Calendar } from '@pattern/dates';

function Demo() {
  return (
    <Group position="center">
      <Calendar firstDayOfWeek="sunday" />
    </Group>
  );
}

export const firstDaySunday: PatternDemo = {
  type: 'demo',
  component: Demo,
};

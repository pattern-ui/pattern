import React from 'react';
import { Group } from '@pattern/core';
import { Month } from '@pattern/dates';

export default function Demo() {
  return (
    <Group position="center">
      <Month month={new Date()} firstDayOfWeek="sunday" />
    </Group>
  );
}

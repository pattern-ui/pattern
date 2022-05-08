import React from 'react';
import { Group } from '@pattern-ui/core';
import { Month } from '@pattern-ui/dates';

export default function Demo() {
  return (
    <Group position="center">
      <Month month={new Date()} hideWeekdays />
    </Group>
  );
}

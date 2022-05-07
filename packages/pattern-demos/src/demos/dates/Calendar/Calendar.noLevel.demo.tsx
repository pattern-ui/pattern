import React from 'react';
import { Group } from '@pattern-ui/core';
import { Calendar } from '@pattern-ui/dates';

export default function Demo() {
  return (
    <Group position="center">
      <Calendar value={null} allowLevelChange={false} />
    </Group>
  );
}

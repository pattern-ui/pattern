import React from 'react';
import { Group } from '@pattern/core';
import { Calendar } from '@pattern/dates';

export default function Demo() {
  return (
    <Group position="center">
      <Calendar value={null} allowLevelChange={false} />
    </Group>
  );
}

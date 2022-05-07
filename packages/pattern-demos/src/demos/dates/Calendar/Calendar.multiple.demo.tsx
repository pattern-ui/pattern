import React, { useState } from 'react';
import { Group } from '@pattern-ui/core';
import { Calendar } from '@pattern-ui/dates';

export default function Demo() {
  const [value, setValue] = useState<Date[]>([]);
  return (
    <Group position="center">
      <Calendar multiple value={value} onChange={setValue} />
    </Group>
  );
}

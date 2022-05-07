import 'dayjs/locale/ru';
import React, { useState } from 'react';
import { Group } from '@pattern/core';
import { Calendar } from '@pattern/dates';

export default function Demo() {
  const [value, setValue] = useState(null);
  return (
    <Group position="center">
      <Calendar value={value} onChange={setValue} locale="ru" />
    </Group>
  );
}

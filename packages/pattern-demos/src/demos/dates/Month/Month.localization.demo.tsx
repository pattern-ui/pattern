import 'dayjs/locale/ru';
import React, { useState } from 'react';
import { Group } from '@pattern/core';
import { Month } from '@pattern/dates';

export default function Demo() {
  const [value, setValue] = useState(new Date());
  return (
    <Group position="center">
      <Month month={value} value={value} onChange={setValue} locale="ru" />
    </Group>
  );
}

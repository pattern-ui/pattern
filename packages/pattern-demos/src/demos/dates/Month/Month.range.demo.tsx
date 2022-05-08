import React from 'react';
import { Group } from '@pattern-ui/core';
import dayjs from 'dayjs';
import { Month } from '@pattern-ui/dates';

export default function Demo() {
  return (
    <Group position="center">
      <Month
        month={new Date()}
        range={[
          dayjs(new Date()).startOf('month').toDate(),
          dayjs(new Date()).startOf('month').add(4, 'days').toDate(),
        ]}
      />
    </Group>
  );
}

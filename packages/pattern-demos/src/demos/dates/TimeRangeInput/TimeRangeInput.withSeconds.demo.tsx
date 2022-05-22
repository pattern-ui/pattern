import React from 'react';
import dayjs from 'dayjs';
import { Container } from '@pattern-ui/core';
import { TimeRangeInput } from '@pattern-ui/dates';

export default function Demo() {
  return (
    <Container size={340}>
      <TimeRangeInput
        withSeconds
        defaultValue={[new Date(), dayjs(new Date()).add(30, 'minutes').toDate()]}
      />
    </Container>
  );
}

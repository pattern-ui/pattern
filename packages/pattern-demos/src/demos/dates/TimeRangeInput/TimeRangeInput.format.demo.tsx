import dayjs from 'dayjs';
import React from 'react';
import { Container } from '@pattern/core';
import { TimeRangeInput } from '@pattern/dates';

function Demo() {
  return (
    <Container size={340}>
      <TimeRangeInput
        label="Appointment time"
        format="12"
        defaultValue={[new Date(), dayjs(new Date()).add(30, 'minutes').toDate()]}
      />
    </Container>
  );
}

export const format: PatternDemo = {
  type: 'demo',
  component: Demo,
};

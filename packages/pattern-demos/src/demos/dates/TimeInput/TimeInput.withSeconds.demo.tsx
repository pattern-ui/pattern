import React from 'react';
import { Container } from '@pattern/core';
import { TimeInput } from '@pattern/dates';

function Demo() {
  return (
    <Container size={340}>
      <TimeInput label="What time is it now?" withSeconds defaultValue={new Date()} />
    </Container>
  );
}

export const withSeconds: PatternDemo = {
  type: 'demo',
  component: Demo,
};

import React from 'react';
import { Container } from '@pattern/core';
import { TimeInput } from '@pattern/dates';

export default function Demo() {
  return (
    <Container size={340}>
      <TimeInput label="What time is it now?" withSeconds defaultValue={new Date()} />
    </Container>
  );
}

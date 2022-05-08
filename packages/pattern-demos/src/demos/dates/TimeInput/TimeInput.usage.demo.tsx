import React from 'react';
import { Container } from '@pattern-ui/core';
import { TimeInput } from '@pattern-ui/dates';

export default function Demo() {
  return (
    <Container size={340}>
      <TimeInput label="What time is it now?" />
    </Container>
  );
}

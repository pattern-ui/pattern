import React from 'react';
import { Container } from '@pattern/core';
import { TimeInput } from '@pattern/dates';

const code = `
import { TimeInput } from '@pattern/dates';

function Demo() {
  return <TimeInput label="What time is it now?" />;
}
`;

function Demo() {
  return (
    <Container size={340}>
      <TimeInput label="What time is it now?" />
    </Container>
  );
}

export const usage: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

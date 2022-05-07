import React from 'react';
import { Text, Title } from '@pattern-ui/core';

export default function Demo() {
  return (
    <Title order={3}>
      Title in which you want to{' '}
      <Text color="blue" inherit component="span">
        highlight
      </Text>{' '}
      something
    </Title>
  );
}

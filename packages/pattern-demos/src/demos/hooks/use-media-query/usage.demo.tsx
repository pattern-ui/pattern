import React from 'react';
import { Group, Badge } from '@pattern-ui/core';
import { useMediaQuery } from '@pattern-ui/hooks';

export default function Demo() {
  const matches = useMediaQuery('(min-width: 900px)');

  return (
    <Group position="center">
      <Badge color={matches ? 'teal' : 'red'} variant="filled">
        Breakpoint {matches ? 'matches' : 'does not match'}
      </Badge>
    </Group>
  );
}

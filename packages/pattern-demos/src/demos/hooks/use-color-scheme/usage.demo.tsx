import React from 'react';
import { Group, Badge } from '@pattern-ui/core';
import { useColorScheme } from '@pattern-ui/hooks';

export default function Demo() {
  const colorScheme = useColorScheme();

  return (
    <Group position="center">
      <Badge color={colorScheme === 'dark' ? 'blue' : 'teal'} variant="filled">
        Your system color scheme is {colorScheme}
      </Badge>
    </Group>
  );
}

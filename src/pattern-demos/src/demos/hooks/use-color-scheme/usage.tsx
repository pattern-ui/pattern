import React from 'react';
import { Group, Badge } from '@pattern/core';
import { useColorScheme } from '@pattern/hooks';

const code = `
import { Badge } from '@pattern/core';
import { useColorScheme } from '@pattern/hooks';

function Demo() {
  const colorScheme = useColorScheme();

  return (
    <Badge color={colorScheme === 'dark' ? 'blue' : 'teal'} variant="filled">
      Your system color scheme is {colorScheme}
    </Badge>
  );
}`;

function Demo() {
  const colorScheme = useColorScheme();

  return (
    <Group position="center">
      <Badge color={colorScheme === 'dark' ? 'blue' : 'teal'} variant="filled">
        Your system color scheme is {colorScheme}
      </Badge>
    </Group>
  );
}

export const useColorSchemeDemo: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

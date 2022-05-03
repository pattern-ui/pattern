import React from 'react';
import { Group, Button, Text, PatternProvider, usePatternColorScheme } from '@pattern/core';

const code = `import { Button, PatternProvider, Text } from '@pattern/core';

function Demo() {
  return (
    <PatternProvider theme={{ fontFamily: 'Georgia, serif' }}>
      <Text align="center" mb="xs">Georgia or serif text</Text>

      <PatternProvider theme={{ fontFamily: 'Greycliff CF, sans-serif' }}>
        <Button>Greycliff CF button</Button>
      </PatternProvider>
    </PatternProvider>
  );
}`;

function Demo() {
  const { colorScheme } = usePatternColorScheme();

  return (
    <PatternProvider theme={{ fontFamily: 'Georgia, serif', colorScheme }}>
      <Text align="center" mb="xs">
        Georgia or serif text
      </Text>

      <PatternProvider theme={{ fontFamily: 'Greycliff CF, sans-serif', colorScheme }}>
        <Group position="center">
          <Button>Greycliff CF button</Button>
        </Group>
      </PatternProvider>
    </PatternProvider>
  );
}

export const nestedProviders: PatternDemo = {
  type: 'demo',
  component: Demo,
  code,
};

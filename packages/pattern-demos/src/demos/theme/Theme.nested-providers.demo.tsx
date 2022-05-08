import React from 'react';
import { Group, Button, Text, PatternProvider, usePatternColorScheme } from '@pattern-ui/core';

export default function Demo() {
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

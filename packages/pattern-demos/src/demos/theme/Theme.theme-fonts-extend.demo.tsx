import React from 'react';
import { Group, Button, Code, Title, PatternProvider, usePatternColorScheme } from '@pattern-ui/core';

export default function Demo() {
  const { colorScheme } = usePatternColorScheme();

  return (
    <PatternProvider
      theme={{
        colorScheme,
        fontFamily: 'Verdana, sans-serif',
        fontFamilyMonospace: 'Monaco, Courier, monospace',
        headings: { fontFamily: 'Greycliff CF, sans-serif' },
      }}
    >
      <Title style={{ textAlign: 'center', marginBottom: 10 }} order={3}>
        Greycliff CF or sans-serif title
      </Title>

      <Group position="center">
        <Button>Verdana button</Button>
        <Code>Monaco, Courier Code</Code>
      </Group>
    </PatternProvider>
  );
}

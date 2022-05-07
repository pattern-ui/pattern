import React from 'react';
import { Group, Button, Code, Title, PatternProvider, usePatternColorScheme } from '@pattern/core';

const code = `
import { Button, Code, Title, PatternProvider } from '@pattern/core';

function Demo() {
  return (
    <PatternProvider
      theme={{
        fontFamily: 'Verdana, sans-serif',
        fontFamilyMonospace: 'Monaco, Courier, monospace',
        headings: { fontFamily: 'Greycliff CF, sans-serif' },
      }}
    >
      <Title order={3}>Greycliff CF or sans-serif title</Title>
      <Button>Verdana button</Button>
      <Code>Monaco, Courier Code</Code>
    </PatternProvider>
  );
}
`;

function Demo() {
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

export const themeFontsExtend: PatternDemo = {
  type: 'demo',
  component: Demo,
  code,
};

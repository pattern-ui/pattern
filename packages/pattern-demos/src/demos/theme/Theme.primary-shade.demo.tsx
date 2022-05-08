import React from 'react';
import { PatternProvider, Group, Button, PatternTheme } from '@pattern-ui/core';

function Wrapper({ primaryShade }: { primaryShade: PatternTheme['primaryShade'] }) {
  return (
    <PatternProvider inherit theme={{ primaryShade }}>
      <Group position="center">
        <Button variant="filled">Filled button</Button>
        <Button variant="light">Light button</Button>
        <Button variant="outline">Outline button</Button>
      </Group>
    </PatternProvider>
  );
}

const codeTemplate = (props: string) => `
import { PatternProvider, Group, Button } from '@pattern-ui/core';

export default function Demo() {
  return (
    <PatternProvider theme={{ primaryShade: ${props
      .replace(' primaryShade={', '')
      .replace('}', '')} }}>
      <Group position="center">
        <Button variant="filled">Filled button</Button>
        <Button variant="light">Light button</Button>
        <Button variant="outline">Outline button</Button>
      </Group>
    </PatternProvider>
  );
}
`;

export const primaryShade: PatternControlDemo = {
  type: 'control',
  component: Wrapper as any,
  codeTemplate,
  controls: [{ name: 'primaryShade', type: 'number', initialValue: 6, min: 0, max: 9 }],
};

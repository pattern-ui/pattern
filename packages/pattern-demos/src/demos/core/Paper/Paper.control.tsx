import React from 'react';
import { Text, Paper, DEFAULT_THEME } from '@pattern-ui/core';

function Wrapper(props: any) {
  return (
    <div style={{ padding: 20 }}>
      <Paper style={{ maxWidth: 400, margin: 'auto' }} {...props}>
        <Text>Paper is the most basic ui component</Text>
        <Text>
          Use it to create cards, dropdowns, modals and other components that require background
          with shadow
        </Text>
      </Paper>
    </div>
  );
}

const codeTemplate = (props: string) => `
import { Text, Paper } from '@pattern-ui/core';

export default function Demo() {
  return (
    <Paper${props}>
      <Text>Paper is the most basic ui component</Text>
      <Text>
        Use it to create cards, dropdowns, modals and other components that require background
        with shadow
      </Text>
    </Paper>
  );
}
`;

export const control: PatternControlDemo = {
  type: 'control',
  component: Wrapper,
  codeTemplate,
  background: (colorScheme) =>
    colorScheme === 'dark' ? DEFAULT_THEME.colors.dark[8] : DEFAULT_THEME.colors.gray[0],
  controls: [
    { name: 'shadow', type: 'size', initialValue: 'xs', defaultValue: 'none' },
    { name: 'radius', type: 'size', initialValue: 'xs', defaultValue: 'xs' },
    { name: 'p', label: 'Padding', type: 'size', initialValue: 'md', defaultValue: 0 },
    { name: 'withBorder', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};

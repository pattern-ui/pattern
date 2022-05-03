import React, { useState } from 'react';
import { CheckIcon } from '@modulz/radix-icons';
import { usePatternTheme, ColorSwatch, Group } from '@pattern/core';

const code = `
import { useState } from 'react';
import { CheckIcon } from '@modulz/radix-icons';
import { ColorSwatch, Group, usePatternTheme } from '@pattern/core';

function Demo() {
  const theme = usePatternTheme();
  const [checked, setChecked] = useState(true);

  return (
    <Group position="center" spacing="xs">
      <ColorSwatch component="a" href="https://pattern-ui.design" color={theme.colors.blue[6]} />
      <ColorSwatch
        component="button"
        color={theme.colors.grape[6]}
        onClick={() => setChecked((c) => !c)}
        style={{ color: '#fff', cursor: 'pointer' }}
      >
        {checked && <CheckIcon />}
      </ColorSwatch>
    </Group>
  );
}
`;

function Demo() {
  const theme = usePatternTheme();
  const [checked, setChecked] = useState(true);

  return (
    <Group position="center" spacing="xs">
      <ColorSwatch component="a" href="https://pattern-ui.design" color={theme.colors.blue[6]} />
      <ColorSwatch
        component="button"
        color={theme.colors.grape[6]}
        onClick={() => setChecked((c) => !c)}
        style={{ color: '#fff', cursor: 'pointer' }}
      >
        {checked && <CheckIcon />}
      </ColorSwatch>
    </Group>
  );
}

export const component: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

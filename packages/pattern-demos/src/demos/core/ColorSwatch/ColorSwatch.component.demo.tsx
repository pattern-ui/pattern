import React, { useState } from 'react';
import { CheckIcon } from '@modulz/radix-icons';
import { usePatternTheme, ColorSwatch, Group } from '@pattern-ui/core';

export default function Demo() {
  const theme = usePatternTheme();
  const [checked, setChecked] = useState(true);

  return (
    <Group position="center" spacing="xs">
      <ColorSwatch component="a" href="https://pattern.icu" color={theme.colors.blue[6]} />
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

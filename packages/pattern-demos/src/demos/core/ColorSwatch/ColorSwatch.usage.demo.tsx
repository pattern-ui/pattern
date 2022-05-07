import React from 'react';
import { usePatternTheme, ColorSwatch, Group } from '@pattern/core';

export default function Demo() {
  const theme = usePatternTheme();
  const swatches = Object.keys(theme.colors).map((color) => (
    <ColorSwatch key={color} color={theme.colors[color][6]} />
  ));

  return (
    <Group position="center" spacing="xs">
      {swatches}
    </Group>
  );
}

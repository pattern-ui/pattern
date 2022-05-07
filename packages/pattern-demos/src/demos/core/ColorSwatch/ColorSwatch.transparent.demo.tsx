import React from 'react';
import { usePatternTheme, ColorSwatch, Group } from '@pattern/core';

function Demo() {
  const theme = usePatternTheme();
  const swatches = Object.keys(theme.colors).map((color) => (
    <ColorSwatch key={color} color={theme.fn.rgba(theme.colors[color][6], 0.5)} />
  ));

  return (
    <Group position="center" spacing="xs">
      {swatches}
    </Group>
  );
}

export const transparent: PatternDemo = {
  type: 'demo',
  component: Demo,
};

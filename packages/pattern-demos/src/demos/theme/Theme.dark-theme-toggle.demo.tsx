import React from 'react';
import { Group, ActionIcon, usePatternColorScheme } from '@pattern/core';
import { Sun, MoonStars } from 'tabler-icons-react';

function Demo() {
  const { colorScheme, toggleColorScheme } = usePatternColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Group position="center">
      <ActionIcon
        variant="outline"
        color={dark ? 'yellow' : 'blue'}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
      >
        {dark ? <Sun size={18} /> : <MoonStars size={18} />}
      </ActionIcon>
    </Group>
  );
}

export const darkThemeToggle: PatternDemo = {
  type: 'demo',
  component: Demo,
};

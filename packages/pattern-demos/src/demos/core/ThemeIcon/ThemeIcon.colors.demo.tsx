import React from 'react';
import { Photo } from 'tabler-icons-react';
import { PATTERN_COLORS, Group, ThemeIcon, ThemeIconProps } from '@pattern-ui/core';

const getThemes = (props?: ThemeIconProps) =>
  PATTERN_COLORS.map((color) => <ThemeIcon key={color} color={color} {...props} />);

export default function Demo() {
  return (
    <>
      <Group position="center">
        {getThemes({ children: <Photo size={16} />, variant: 'outline' })}
      </Group>

      <Group position="center" mt="md">
        {getThemes({ children: <Photo size={16} />, variant: 'light' })}
      </Group>

      <Group position="center" mt="md">
        {getThemes({ children: <Photo size={16} />, variant: 'filled' })}
      </Group>
    </>
  );
}

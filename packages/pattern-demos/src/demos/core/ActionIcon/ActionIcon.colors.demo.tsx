import React from 'react';
import { Sun } from 'tabler-icons-react';
import { Group, PATTERN_COLORS, ActionIcon, ActionIconProps } from '@pattern/core';

const getColors = (props: Omit<ActionIconProps<'button'>, 'children'>) =>
  PATTERN_COLORS.slice(1).map((color) => (
    <ActionIcon key={color} color={color} {...props}>
      <Sun size={18} />
    </ActionIcon>
  ));

export default function Demo() {
  return (
    <>
      <Group position="center">{getColors({ variant: 'hover' })}</Group>
      <Group position="center" mt="md">
        {getColors({ variant: 'outline' })}
      </Group>
      <Group position="center" mt="md">
        {getColors({ variant: 'light' })}
      </Group>
      <Group position="center" mt="md">
        {getColors({ variant: 'filled' })}
      </Group>
    </>
  );
}

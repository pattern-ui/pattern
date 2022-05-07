import React from 'react';
import { useHover } from '@pattern-ui/hooks';
import { usePatternTheme, Text } from '@pattern-ui/core';

export default function Demo() {
  const theme = usePatternTheme();
  const { hovered, ref } = useHover();
  return (
    <div
      ref={ref}
      style={{
        height: 60,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.blue[0],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>{hovered ? 'I am hovered' : 'Put mouse over me please'}</Text>
    </div>
  );
}

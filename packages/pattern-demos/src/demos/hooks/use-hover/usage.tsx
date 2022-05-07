import React from 'react';
import { useHover } from '@pattern/hooks';
import { usePatternTheme, Text } from '@pattern/core';

function Demo() {
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

export const useHoverDemo: PatternDemo = {
  type: 'demo',
  component: Demo,
};

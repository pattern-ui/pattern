import React from 'react';
import { Center, usePatternTheme } from '@pattern/core';

function Demo() {
  const theme = usePatternTheme();
  return (
    <Center
      style={{
        margin: 'auto',
        maxWidth: 400,
        height: 100,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.blue[0],
      }}
    >
      <div
        style={{
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.blue[1],
        }}
      >
        All elements inside Center are centered
      </div>
    </Center>
  );
}

export const usage: PatternDemo = {
  type: 'demo',
  component: Demo,
};

import React from 'react';
import { Group, Button, PatternProvider, usePatternTheme } from '@pattern/core';

function Demo() {
  const theme = usePatternTheme();

  return (
    <PatternProvider
      theme={{
        colors: {
          brand: [
            '#F0BBDD',
            '#ED9BCF',
            '#EC7CC3',
            '#ED5DB8',
            '#F13EAF',
            '#F71FA7',
            '#FF00A1',
            '#E00890',
            '#C50E82',
            '#AD1374',
          ],
        },
        primaryColor: 'brand',
        colorScheme: theme.colorScheme,
      }}
    >
      <Group position="center">
        <Button>Primary button</Button>
        <Button color="blue">Blue button</Button>
      </Group>
    </PatternProvider>
  );
}

export const primaryColor: PatternDemo = {
  type: 'demo',
  component: Demo,
};

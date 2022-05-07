import React from 'react';
import { SimpleGrid } from '@pattern/core';
import { defaultItems } from './_Item';

function Demo() {
  return (
    <SimpleGrid
      cols={4}
      spacing="lg"
      breakpoints={[
        { maxWidth: 'md', cols: 3, spacing: 'md' },
        { maxWidth: 'sm', cols: 2, spacing: 'sm' },
        { maxWidth: 'xs', cols: 1, spacing: 'sm' },
      ]}
    >
      {defaultItems}
    </SimpleGrid>
  );
}

export const themeBreakpoints: PatternDemo = {
  type: 'demo',
  component: Demo,
};

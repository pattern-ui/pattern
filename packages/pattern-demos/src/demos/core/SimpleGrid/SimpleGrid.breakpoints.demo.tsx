import React from 'react';
import { SimpleGrid } from '@pattern/core';
import { defaultItems } from './_Item';

export default function Demo() {
  return (
    <SimpleGrid
      cols={4}
      spacing="lg"
      id="grid-breakpoints"
      breakpoints={[
        { maxWidth: 980, cols: 3, spacing: 'md' },
        { maxWidth: 755, cols: 2, spacing: 'sm' },
        { maxWidth: 600, cols: 1, spacing: 'sm' },
      ]}
    >
      {defaultItems}
    </SimpleGrid>
  );
}

import React from 'react';
import { SimpleGrid, SimpleGridProps } from '@pattern-ui/core';
import { defaultItems } from './_Item';

function Wrapper(props: SimpleGridProps) {
  return (
    <SimpleGrid {...props} id="grid-configurator">
      {defaultItems}
    </SimpleGrid>
  );
}

const codeTemplate = (props: string) => `
import { SimpleGrid } from '@pattern-ui/core';

export default function Demo() {
  return (
    <SimpleGrid${props}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  )
}
`;

export const control: PatternControlDemo = {
  type: 'control',
  component: Wrapper,
  codeTemplate,
  controls: [
    { name: 'cols', type: 'number', initialValue: 3, min: 1, max: 6, step: 1 },
    { name: 'spacing', type: 'size', initialValue: 'md', defaultValue: 'md' },
  ],
};
import React from 'react';
import { Pagination, Group } from '@pattern-ui/core';

function Wrapper(props: any) {
  return (
    <Group position="center">
      <Pagination total={10} {...props} />
    </Group>
  );
}

const codeTemplate = (props: string) => `
import { Pagination } from '@pattern-ui/core';

export default function Demo() {
  return <Pagination total={10}${props} />;
}
`;

export const control: PatternControlDemo = {
  type: 'control',
  component: Wrapper,
  codeTemplate,
  controls: [
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'radius', type: 'size', initialValue: 'xs', defaultValue: 'xs' },
    { name: 'withControls', type: 'boolean', initialValue: true, defaultValue: true },
    { name: 'withEdges', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};

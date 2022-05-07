import React from 'react';
import { Progress, ProgressProps } from '@pattern-ui/core';

function Wrapper(props: ProgressProps) {
  return (
    <div style={{ width: '100%', margin: 'auto' }}>
      <Progress {...props} />
    </div>
  );
}

const codeTemplate = (props: string) => `
import { Progress } from '@pattern-ui/core';

export default function Demo() {
  return <Progress${props} />;
}
`;

export const control: PatternControlDemo = {
  type: 'control',
  component: Wrapper,
  codeTemplate,
  controls: [
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'radius', type: 'size', initialValue: 'xs', defaultValue: 'xs' },
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'value', type: 'number', initialValue: 50, max: 100, min: 0, step: 10 },
    { name: 'striped', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'animate', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};

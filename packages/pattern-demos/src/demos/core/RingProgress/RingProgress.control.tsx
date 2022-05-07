import React from 'react';
import { RingProgress, Group, RingProgressProps } from '@pattern/core';

function Wrapper(props: RingProgressProps) {
  return (
    <Group position="center">
      <RingProgress
        {...props}
        sections={[
          { value: 40, color: 'cyan' },
          { value: 15, color: 'orange' },
          { value: 15, color: 'grape' },
        ]}
      />
    </Group>
  );
}

const codeTemplate = (props: string) => `
import { RingProgress } from '@pattern/core';

export default function Demo() {
  return (
    <RingProgress
     ${props}
      sections={[
        { value: 40, color: 'cyan' },
        { value: 15, color: 'orange' },
        { value: 15, color: 'grape' },
      ]}
    />
  )
}
`;

export const control: PatternControlDemo = {
  type: 'control',
  component: Wrapper,
  codeTemplate,
  demoProps: { multiline: 3 },
  controls: [
    { name: 'size', type: 'number', initialValue: 120, step: 10, min: 60, max: 400 },
    { name: 'thickness', type: 'number', initialValue: 12, step: 1, min: 1, max: 40 },
    { name: 'roundCaps', type: 'boolean', initialValue: true, defaultValue: false },
  ],
};

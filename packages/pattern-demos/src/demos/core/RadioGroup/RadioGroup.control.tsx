import React from 'react';
import { RadioGroup, RadioGroupProps, Radio } from '@pattern-ui/core';

const codeTemplate = (props: string) => `
import { RadioGroup, Radio } from '@pattern-ui/core';

export default function Demo() {
  return (
    <RadioGroup
     ${props}
    >
      <Radio value="react" label="React" />
      <Radio value="svelte" label="Svelte" />
      <Radio value="ng" label="Angular" />
      <Radio value="vue" label="Vue" />
    </RadioGroup>
  );
}
`;

function Wrapper(props: RadioGroupProps) {
  return (
    <RadioGroup defaultValue="react" {...props}>
      <Radio value="react" label="React" />
      <Radio value="svelte" label="Svelte" />
      <Radio value="ng" label="Angular" />
      <Radio value="vue" label="Vue" />
    </RadioGroup>
  );
}

export const control: PatternControlDemo = {
  type: 'control',
  component: Wrapper,
  codeTemplate,
  demoProps: { multiline: 3 },
  controls: [
    {
      name: 'orientation',
      type: 'segmented',
      data: [
        { label: 'horizontal', value: 'horizontal' },
        { label: 'vertical', value: 'vertical' },
      ],
      initialValue: 'horizontal',
      defaultValue: 'horizontal',
    },
    { name: 'spacing', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'required', type: 'boolean', initialValue: true, defaultValue: false },
  ],
};

import React from 'react';
import { Select } from '@pattern/core';

const codeTemplate = (props: string) => `
import { Select } from '@pattern/core';

export default function Demo() {
  return <Select${props} />;
}
`;

export const flip: PatternControlDemo = {
  type: 'control',
  component: (props: any) => (
    <Select
      placeholder="Pick one"
      label="Your favorite framework/library"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' },
      ]}
      {...props}
    />
  ),
  codeTemplate,
  demoProps: { multiline: false },
  controls: [
    {
      name: 'dropdownPosition',
      type: 'segmented',
      data: [
        { label: 'top', value: 'top' },
        { label: 'bottom', value: 'bottom' },
        { label: 'flip', value: 'flip' },
      ],
      initialValue: 'flip',
      defaultValue: 'flip',
    },
  ],
};

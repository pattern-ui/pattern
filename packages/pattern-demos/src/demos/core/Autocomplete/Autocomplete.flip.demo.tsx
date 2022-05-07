import React from 'react';
import { Autocomplete } from '@pattern/core';

const codeTemplate = (props: string) => `
import { Autocomplete } from '@pattern/core';

export default function Demo() {
  return <Autocomplete${props} />;
}
`;

export const flip: PatternControlDemo = {
  type: 'control',
  component: (props: any) => (
    <Autocomplete
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

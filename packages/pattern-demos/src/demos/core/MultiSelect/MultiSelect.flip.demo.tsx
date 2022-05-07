import React from 'react';
import { MultiSelect } from '@pattern/core';

const codeTemplate = (props: string) => `
import { MultiSelect } from '@pattern/core';

export default function Demo() {
  return <MultiSelect${props} />;
}
`;

export const flip: PatternDemo = {
  type: 'configurator',
  component: (props: any) => (
    <MultiSelect
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
  configuratorProps: { multiline: false },
  configurator: [
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

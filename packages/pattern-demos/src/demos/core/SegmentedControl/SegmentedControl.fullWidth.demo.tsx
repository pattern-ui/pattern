import React from 'react';
import { SegmentedControlProps } from '@pattern-ui/core';
import { SegmentedControlWrapper } from './Wrapper';

export default function Demo(props: SegmentedControlProps) {
  return (
    <>
      <SegmentedControlWrapper {...props} />
    </>
  );
}

const codeTemplate = (props: string) => `
import { SegmentedControl } from '@pattern-ui/core';

export default function Demo() {
  return <SegmentedControl${props} />;
}
`;

export const fullWidth: PatternControlDemo = {
  type: 'control',
  component: Demo,
  codeTemplate,
  controls: [
    { name: 'fullWidth', type: 'boolean', defaultValue: false },
    {
      name: 'orientation',
      type: 'segmented',
      initialValue: 'horizontal',
      defaultValue: 'horizontal',
      data: [
        { label: 'horizontal', value: 'horizontal' },
        { label: 'vertical', value: 'vertical' },
      ],
    },
  ],
};

import React from 'react';
import { TimelineProps } from '@pattern-ui/core';
import { TimelineBase } from './_base';

function Wrapper(props: TimelineProps) {
  return (
    <div style={{ maxWidth: 320, margin: 'auto' }}>
      <TimelineBase noIcon {...props} />
    </div>
  );
}

const codeTemplate = (props: string) => `
import { Timeline } from '@pattern-ui/core';

export default function Demo() {
  return (
    <Timeline${props}>
      {/* items */}
    </Timeline>
  );
}
`;

export const control: PatternControlDemo = {
  type: 'control',
  component: Wrapper,
  codeTemplate,
  controls: [
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'radius', type: 'size', initialValue: 'xl', defaultValue: 'xl' },
    { name: 'active', type: 'number', initialValue: 1, defaultValue: null, min: -1, max: 3 },
    { name: 'reverseActive', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'lineWidth', type: 'number', initialValue: 4, defaultValue: 4, min: 1, max: 8 },
    {
      name: 'bulletSize',
      type: 'number',
      initialValue: 20,
      defaultValue: 20,
      min: 12,
      max: 30,
      step: 2,
    },
    {
      name: 'align',
      type: 'segmented',
      data: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
      initialValue: 'left',
      defaultValue: 'left',
    },
  ],
};
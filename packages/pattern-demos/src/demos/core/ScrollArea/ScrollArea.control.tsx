import React from 'react';
import { ScrollArea, ScrollAreaProps } from '@pattern-ui/core';
import { Content } from './_content';

function Wrapper(props: ScrollAreaProps) {
  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <ScrollArea style={{ height: 250 }} {...props}>
        <Content />
      </ScrollArea>
    </div>
  );
}

const codeTemplate = (props: string) => `
import { ScrollArea } from '@pattern-ui/core';

export default function Demo() {
  return (
    <ScrollArea style={{ height: 250 }}${props}>
      {/* ... content */}
    </ScrollArea>
  );
}
`;

export const control: PatternControlDemo = {
  type: 'control',
  component: Wrapper,
  codeTemplate,
  controls: [
    {
      name: 'type',
      type: 'select',
      data: [
        { value: 'hover', label: 'Hover' },
        { value: 'auto', label: 'Auto' },
        { value: 'always', label: 'Always' },
        { value: 'scroll', label: 'Scroll' },
      ],
      initialValue: 'hover',
      defaultValue: 'hover',
    },
    {
      name: 'offsetScrollbars',
      type: 'boolean',
      defaultValue: false,
      initialValue: false,
    },
    {
      name: 'scrollbarSize',
      type: 'number',
      min: 2,
      max: 20,
      step: 2,
      defaultValue: 10,
      initialValue: 10,
    },
    {
      name: 'scrollHideDelay',
      type: 'number',
      min: 0,
      max: 6000,
      step: 500,
      defaultValue: 1000,
      initialValue: 1000,
    },
  ],
};

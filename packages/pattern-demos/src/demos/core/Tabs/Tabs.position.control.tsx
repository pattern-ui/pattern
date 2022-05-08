import React from 'react';
import { Tabs, TabsProps } from '@pattern-ui/core';

function Wrapper(props: TabsProps) {
  return (
    <Tabs defaultValue="first">
      <Tabs.List {...props}>
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="second">Second tab</Tabs.Tab>
        <Tabs.Tab value="third">Third tab</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}

const codeTemplate = (props: string) => `
import { Tabs } from '@pattern-ui/core';

export default function Demo() {
  return (
    <Tabs defaultValue="first">
      <Tabs.List${props}>
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="second">Second tab</Tabs.Tab>
        <Tabs.Tab value="third">Third tab</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
`;

export const positionControl: PatternControlDemo = {
  type: 'control',
  component: Wrapper,
  codeTemplate,
  controls: [
    { name: 'grow', type: 'boolean', defaultValue: false },
    {
      name: 'position',
      type: 'select',
      initialValue: 'left',
      defaultValue: 'left',
      data: [
        { label: 'left', value: 'left' },
        { label: 'right', value: 'right' },
        { label: 'center', value: 'center' },
        { label: 'apart', value: 'apart' },
      ],
    },
  ],
};

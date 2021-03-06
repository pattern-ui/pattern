import React from 'react';
import { AccordionProps } from '@pattern-ui/core';
import { BaseDemo } from './_base';

function Wrapper(props: Partial<AccordionProps>) {
  return <BaseDemo {...props} defaultValue="customization" />;
}

const codeTemplate = (props: string) => `
import { Accordion } from '@pattern-ui/core';

export default function Demo() {
  return (
    <Accordion${props} defaultValue="customization">
      <Accordion.Item value="customization">
        <Accordion.Control>Customization</Accordion.Control>
        <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="flexibility">
        <Accordion.Control>Flexibility</Accordion.Control>
        <Accordion.Panel>Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item label="No annoying focus ring" value="focus-ring">
        <Accordion.Control>No annoying focus ring</Accordion.Control>
        <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
`;

export const control: PatternControlDemo = {
  type: 'control',
  component: Wrapper,
  codeTemplate,
  controls: [
    {
      name: 'variant',
      type: 'select',
      initialValue: 'default',
      defaultValue: 'default',
      data: [
        { label: 'Default', value: 'default' },
        { label: 'Contained', value: 'contained' },
        { label: 'Filled', value: 'filled' },
        { label: 'Separated', value: 'separated' },
      ],
    },
    { name: 'radius', type: 'size', defaultValue: 'sm', initialValue: 'sm' },
    {
      name: 'chevronPosition',
      type: 'segmented',
      data: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
      initialValue: 'right',
      defaultValue: 'right',
    },
    {
      name: 'chevronSize',
      type: 'number',
      initialValue: 24,
      defaultValue: 24,
      min: 10,
      max: 40,
      step: 4,
    },
    { name: 'disableChevronRotation', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};

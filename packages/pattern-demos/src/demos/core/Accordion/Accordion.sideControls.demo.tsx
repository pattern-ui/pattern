import React from 'react';
import { Accordion, ActionIcon, AccordionControlProps, Box } from '@pattern/core';
import { Dots } from 'tabler-icons-react';

const code = `
import { Accordion, ActionIcon, AccordionControlProps, Box } from '@pattern/core';
import { Dots } from 'tabler-icons-react';

function AccordionControl(props: AccordionControlProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Accordion.Control {...props} />
      <ActionIcon size="lg">
        <Dots size={16} />
      </ActionIcon>
    </Box>
  );
}

function Demo() {
  return (
    <Accordion chevronPosition="left" sx={{ maxWidth: 400 }} mx="auto">
      <Accordion.Item value="item-1">
        <AccordionControl>Control 1</AccordionControl>
        <Accordion.Panel>Panel 1</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <AccordionControl>Control 2</AccordionControl>
        <Accordion.Panel>Panel 2</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <AccordionControl>Control 3</AccordionControl>
        <Accordion.Panel>Panel 3</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
`;

function AccordionControl(props: AccordionControlProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Accordion.Control {...props} />
      <ActionIcon size="lg">
        <Dots size={16} />
      </ActionIcon>
    </Box>
  );
}

function Demo() {
  return (
    <Accordion chevronPosition="left" sx={{ maxWidth: 400 }} mx="auto">
      <Accordion.Item value="item-1">
        <AccordionControl>Control 1</AccordionControl>
        <Accordion.Panel>Panel 1</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <AccordionControl>Control 2</AccordionControl>
        <Accordion.Panel>Panel 2</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <AccordionControl>Control 3</AccordionControl>
        <Accordion.Panel>Panel 3</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}

export const sideControls: PatternDemo = {
  type: 'demo',
  component: Demo,
};

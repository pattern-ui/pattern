import { Accordion, Box } from '@pattern-ui/core';
import React from 'react';
import { baseAccordionMockdata } from './_mockdata';

export const baseDemoItems = baseAccordionMockdata.map((item, index) => (
  <Accordion.Item key={item.label} value={item.id}>
    <Accordion.Control disabled={index === 1}>{item.label}</Accordion.Control>
    <Accordion.Panel>{item.content}</Accordion.Panel>
  </Accordion.Item>
));

export default function Demo() {
  return (
    <Box sx={{ maxWidth: 380 }} mx="auto">
      <Accordion>{baseDemoItems}</Accordion>
    </Box>
  );
}

import React from 'react';
import { Photo, Printer, CameraSelfie } from 'tabler-icons-react';
import { Accordion, AccordionProps, usePatternTheme } from '@pattern-ui/core';

export function IconsReplacementDemo(props: Partial<AccordionProps>) {
  const theme = usePatternTheme();
  const getColor = (color: string) => theme.colors[color][theme.colorScheme === 'dark' ? 5 : 7];

  return (
    <Accordion variant="contained" {...props}>
      <Accordion.Item value="photos">
        <Accordion.Control icon={<Photo size={20} color={getColor('red')} />}>
          Recent photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="print">
        <Accordion.Control icon={<Printer size={20} color={getColor('blue')} />}>
          Print photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="camera">
        <Accordion.Control icon={<CameraSelfie size={20} color={getColor('teal')} />}>
          Camera settings
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}

export default function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <IconsReplacementDemo />
    </div>
  );
}

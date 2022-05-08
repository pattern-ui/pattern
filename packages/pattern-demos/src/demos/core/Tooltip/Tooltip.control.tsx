import React from 'react';
import { Tooltip, TooltipProps, Group, Button } from '@pattern-ui/core';
import { FLOATING_POSITION_DATA } from '../../../shared/floating-position-data';

const Wrapper = (props: TooltipProps) => (
  <div style={{ padding: 30 }}>
    <Group position="center">
      <Tooltip label="Tooltip" {...props}>
        <Button variant="outline" size="xl">
          With tooltip
        </Button>
      </Tooltip>
    </Group>
  </div>
);

const codeTemplate = (props: string) => `
import { Tooltip, Button } from '@pattern-ui/core';

export default function Demo() {
  return (
    <Tooltip
      label="Tooltip"
     ${props}
    >
      <Button variant="outline" size="xl">
        With tooltip
      </Button>
    </Tooltip>
  );
}
`;

export const control: PatternControlDemo = {
  type: 'control',
  component: Wrapper,
  codeTemplate,
  demoProps: { multiline: 3 },
  controls: [
    {
      name: 'color',
      type: 'color',
      initialValue: 'blue',
    },
    {
      name: 'position',
      type: 'select',
      data: FLOATING_POSITION_DATA,
      initialValue: 'top',
      defaultValue: 'top',
    },
    { name: 'withArrow', type: 'boolean', initialValue: true, defaultValue: false },
  ],
};

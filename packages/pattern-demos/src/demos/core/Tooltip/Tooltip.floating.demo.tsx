import React from 'react';
import { TooltipFloatingProps, Group, Button, Tooltip } from '@pattern-ui/core';

const Wrapper = (props: TooltipFloatingProps) => (
  <div style={{ padding: 30 }}>
    <Group position="center">
      <Tooltip.Floating label="Tooltip" {...props}>
        <Button variant="outline" size="xl">
          With floating tooltip
        </Button>
      </Tooltip.Floating>
    </Group>
  </div>
);

const codeTemplate = (props: string) => `
import { Tooltip, Button } from '@pattern-ui/core';

export default function Demo() {
  return (
    <Tooltip.Floating label="Tooltip"${props}>
      <Button variant="outline" size="xl">
        With floating tooltip
      </Button>
    </Tooltip.Floating>
  );
}
`;

export const floating: PatternControlDemo = {
  type: 'control',
  component: Wrapper,
  codeTemplate,
  controls: [
    {
      name: 'color',
      type: 'color',
      initialValue: 'blue',
    },
    { name: 'radius', type: 'size', initialValue: 'xs', defaultValue: 'xs' },
  ],
};

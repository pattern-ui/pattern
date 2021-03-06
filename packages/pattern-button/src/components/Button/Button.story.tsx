import React from 'react';
import { PATTERN_COLORS } from '@pattern-ui/styles';
import { Group } from '@pattern-ui/group';
import { Button } from './Button';

export default { title: 'Button' };

export const Colors = () => {
  const items = PATTERN_COLORS.map((color) => (
    <Group mt="xl" key={color}>
      <Button color={color}>Filled button</Button>
      <Button color={color} variant="light">
        Light button
      </Button>
      <Button color={color} variant="outline">
        Outline button
      </Button>
      <Button color={color} variant="gradient">
        Gradient button
      </Button>
    </Group>
  ));

  return <div style={{ padding: 40 }}>{items}</div>;
};

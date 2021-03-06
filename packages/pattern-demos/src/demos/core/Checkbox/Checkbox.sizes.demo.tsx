import React from 'react';
import { Checkbox, PATTERN_SIZES, Group } from '@pattern-ui/core';

export default function Demo() {
  const items = PATTERN_SIZES.map((size) => (
    <Checkbox key={size} size={size} defaultChecked label={`${size} checkbox`} />
  ));

  return (
    <Group direction="column" spacing="sm">
      {items}
    </Group>
  );
}

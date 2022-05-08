import React from 'react';
import { Group, PATTERN_COLORS, Badge } from '@pattern-ui/core';

export default function Demo() {
  const items = PATTERN_COLORS.map((color) => (
    <Badge key={color} color={color} variant="dot">
      {color}
    </Badge>
  ));

  return <Group position="center">{items}</Group>;
}

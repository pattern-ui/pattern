import React from 'react';
import { CloseButton, Group } from '@pattern-ui/core';

export default function Demo() {
  return (
    <Group position="center">
      <CloseButton aria-label="Close modal" />
      <CloseButton title="Close popover" size="xl" iconSize={20} />
    </Group>
  );
}

import React from 'react';
import { CloseButton, Group } from '@pattern/core';

const code = `
import { CloseButton, Group } from '@pattern/core';

function Demo() {
  return (
    <Group position="center">
      <CloseButton aria-label="Close modal" />
      <CloseButton title="Close popover" size="xl" iconSize={20} />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <CloseButton aria-label="Close modal" />
      <CloseButton title="Close popover" size="xl" iconSize={20} />
    </Group>
  );
}

export const closeButton: PatternDemo = {
  type: 'demo',
  component: Demo,
  code,
};

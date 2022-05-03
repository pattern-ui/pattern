import React from 'react';
import { Group } from '@pattern/core';
import { Calendar } from '@pattern/dates';

const code = `
import { Calendar } from '@pattern/dates';

function Demo() {
  return <Calendar allowLevelChange={false} />;
}
`;

function Demo() {
  return (
    <Group position="center">
      <Calendar value={null} allowLevelChange={false} />
    </Group>
  );
}

export const noLevel: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

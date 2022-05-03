import React from 'react';
import { Progress } from '@pattern/core';

const code = `
import { Progress } from '@pattern/core';

function Demo() {
  return (
    <>
      <Progress value={75} label="75%" size="xl" radius="xl" />
      <Progress
        mt="md"
        size="xl"
        radius="xl"
        sections={[
          { value: 30, color: 'pink', label: 'Documents' },
          { value: 30, color: 'grape', label: 'Apps' },
          { value: 25, color: 'violet', label: 'Other' },
        ]}
      />
    </>
  );
}
`;

function Label() {
  return (
    <>
      <Progress value={75} label="75%" size="xl" radius="xl" />
      <Progress
        mt="md"
        size="xl"
        radius="xl"
        sections={[
          { value: 30, color: 'pink', label: 'Documents' },
          { value: 30, color: 'grape', label: 'Apps' },
          { value: 25, color: 'violet', label: 'Other' },
        ]}
      />
    </>
  );
}

export const label: PatternDemo = {
  type: 'demo',
  code,
  component: Label,
};

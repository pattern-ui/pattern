import React from 'react';
import { ExternalLink } from 'tabler-icons-react';
import { Button, Group } from '@pattern/core';

const code = `
import { Button } from '@pattern/core';
import { ExternalLink } from 'tabler-icons-react';

function Demo() {
  return (
    <Button component="a" href="#" variant="outline" leftIcon={<ExternalLink size={14} />}>
      Open in new tab
    </Button>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Button<'a'> component="a" href="#" variant="outline" leftIcon={<ExternalLink size={14} />}>
        Open in new tab
      </Button>
    </Group>
  );
}

export const component: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

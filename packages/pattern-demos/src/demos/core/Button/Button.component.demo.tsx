import React from 'react';
import { ExternalLink } from 'tabler-icons-react';
import { Button, Group } from '@pattern/core';

export default function Demo() {
  return (
    <Group position="center">
      <Button<'a'> component="a" href="#" variant="outline" leftIcon={<ExternalLink size={14} />}>
        Open in new tab
      </Button>
    </Group>
  );
}

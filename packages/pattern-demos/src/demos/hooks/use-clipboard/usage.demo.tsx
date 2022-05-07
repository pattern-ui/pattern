import React from 'react';
import { Group, Button } from '@pattern-ui/core';
import { useClipboard } from '@pattern-ui/hooks';

export default function Demo() {
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <Group position="center">
      <Button
        color={clipboard.copied ? 'teal' : 'blue'}
        onClick={() => clipboard.copy('Hello, world!')}
      >
        {clipboard.copied ? 'Copied' : 'Copy'}
      </Button>
    </Group>
  );
}

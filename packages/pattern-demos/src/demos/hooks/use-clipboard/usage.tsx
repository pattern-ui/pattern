import React from 'react';
import { Group, Button } from '@pattern/core';
import { useClipboard } from '@pattern/hooks';

function Demo() {
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

export const useClipboardDemo: PatternDemo = {
  type: 'demo',
  component: Demo,
};

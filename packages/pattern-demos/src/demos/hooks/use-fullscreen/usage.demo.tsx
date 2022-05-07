import React from 'react';
import { useFullscreen } from '@pattern-ui/hooks';
import { Button, Group } from '@pattern-ui/core';

export default function Demo() {
  const { toggle, fullscreen } = useFullscreen();

  return (
    <Group position="center">
      <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
        {fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
      </Button>
    </Group>
  );
}

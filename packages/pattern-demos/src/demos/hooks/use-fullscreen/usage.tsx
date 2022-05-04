import React from 'react';
import { useFullscreen } from '@pattern/hooks';
import { Button, Group } from '@pattern/core';

const code = `
import { useFullscreen } from '@pattern/hooks';
import { Button } from '@pattern/core';

function Demo() {
  const { toggle, fullscreen } = useFullscreen();

  return (
    <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
      {fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
    </Button>
  );
}
`;

function Demo() {
  const { toggle, fullscreen } = useFullscreen();

  return (
    <Group position="center">
      <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
        {fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
      </Button>
    </Group>
  );
}

export const useFullscreenDemo: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

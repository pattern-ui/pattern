import React from 'react';
import { useFullscreen } from '@pattern/hooks';
import { Button, Group, Image } from '@pattern/core';

const refCode = `
import { useFullscreen } from '@pattern/hooks';
import { Button, Image } from '@pattern/core';

function Demo() {
  const { ref, toggle, fullscreen } = useFullscreen();

  return (
    <>
      <Image
        ref={ref}
        src="https://unsplash.com/image.jpg"
        alt="Unsplash Image to make Fullscreen"
        width={200}
      />

      <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
        {fullscreen ? 'Exit Fullscreen' : 'View Image Fullscreen'}
      </Button>
    </>
  );
}
`;

function RefDemo() {
  const { ref, toggle, fullscreen } = useFullscreen();

  return (
    <Group position="center" direction="column">
      <Image
        ref={ref}
        src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        alt="Unsplash Image to make Fullscreen"
        width={200}
      />
      <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
        {fullscreen ? 'Exit Fullscreen' : 'View Image Fullscreen'}
      </Button>
    </Group>
  );
}

export const useFullscreenRefDemo: PatternDemo = {
  type: 'demo',
  code: refCode,
  component: RefDemo,
};

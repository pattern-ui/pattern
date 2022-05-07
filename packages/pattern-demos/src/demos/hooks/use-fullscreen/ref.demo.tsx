import React from 'react';
import { useFullscreen } from '@pattern-ui/hooks';
import { Button, Group, Image } from '@pattern-ui/core';

export default function Demo() {
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

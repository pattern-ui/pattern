import React from 'react';
import { useWindowScroll } from '@pattern-ui/hooks';
import { Button, Text, Group } from '@pattern-ui/core';

export default function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Group position="center">
      <Text>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </Text>
      <Button onClick={() => scrollTo({ y: 0 })}>Scroll to top</Button>
    </Group>
  );
}

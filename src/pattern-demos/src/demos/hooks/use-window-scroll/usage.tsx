import React from 'react';
import { useWindowScroll } from '@pattern/hooks';
import { Button, Text, Group } from '@pattern/core';

const code = `
import { useWindowScroll } from '@pattern/hooks';
import { Button, Text, Group } from '@pattern/core';

function Demo() {
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
`;

function Demo() {
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

export const useWindowScrollDemo: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

import React from 'react';
import { useScrollIntoView } from '@pattern/hooks';
import { Button, Text, Group, usePatternTheme } from '@pattern/core';

export default function Demo() {
  const theme = usePatternTheme();

  const navbarHeight = 60;
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: navbarHeight,
  });

  return (
    <Group position="center">
      <Button
        onClick={() =>
          scrollIntoView({
            alignment: 'center',
          })
        }
      >
        Scroll to target
      </Button>
      <div
        style={{
          width: '100%',
          height: '50vh',
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
        }}
      />
      <Text ref={targetRef}>Hello there</Text>
    </Group>
  );
}

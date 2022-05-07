import React from 'react';
import { usePatternTheme, Text, Group, Code } from '@pattern/core';
import { useResizeObserver } from '@pattern/hooks';

export default function Demo() {
  const theme = usePatternTheme();
  const [ref, rect] = useResizeObserver();

  return (
    <>
      <Text align="center" size="sm" style={{ marginBottom: theme.spacing.xs }}>
        Resize textarea by dragging its right bottom corner
      </Text>

      <Group position="center">
        <textarea
          ref={ref}
          style={{
            width: 400,
            height: 120,
            border: 'none',
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
            position: 'relative',
          }}
        />
      </Group>
      <Text align="center" style={{ marginTop: theme.spacing.sm }}>
        Rect: <Code>{JSON.stringify(rect, null, 2)}</Code>
      </Text>
    </>
  );
}

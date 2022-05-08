import React from 'react';
import { usePatternTheme, Text, Group } from '@pattern-ui/core';
import { useElementSize } from '@pattern-ui/hooks';

export default function Demo() {
  const theme = usePatternTheme();
  const { ref, width, height } = useElementSize();

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
      <Text align="center" mt="sm">
        Width: {width}px, height: {height}px
      </Text>
    </>
  );
}

import React from 'react';
import { usePatternTheme, Group, Text, Code } from '@pattern/core';
import { useMouse } from '@pattern/hooks';

export default function Demo() {
  const theme = usePatternTheme();
  const { ref, x, y } = useMouse();

  return (
    <>
      <Group position="center">
        <div
          ref={ref}
          style={{
            width: 300,
            height: 180,
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
          }}
        />
      </Group>
      <Text align="center" style={{ marginTop: theme.spacing.sm }}>
        Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
      </Text>
    </>
  );
}

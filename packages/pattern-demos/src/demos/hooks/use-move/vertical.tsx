import React, { useState } from 'react';
import { usePatternTheme, Group, Text } from '@pattern/core';
import { useMove } from '@pattern/hooks';

const code = `
import { usePatternTheme, Text } from '@pattern/core';
import { useMove } from '@pattern/hooks';

function Demo() {
  const theme = usePatternTheme();
  const [value, setValue] = useState(0.2);
  const { ref } = useMove(({ y }) => setValue(1 - y));

  return (
    <>
      <div
        ref={ref}
        style={{
          width: 16,
          height: 120,
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
          position: 'relative',
        }}
      >
        {/* Filled bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            height: \`\${value * 100}%\`,
            width: 16,
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.blue[9] : theme.colors.blue[2],
          }}
        />

        {/* Thumb */}
        <div
          style={{
            position: 'absolute',
            bottom: \`calc(\${value * 100}% - 8px)\`,
            left: 0,
            width: 16,
            height: 16,
            backgroundColor: theme.colors.blue[7],
          }}
        />
      </div>

      <Text align="center" style={{ marginTop: theme.spacing.sm }}>
        Value: {Math.round(value * 100)}
      </Text>
    </>
  );
}`;

function Demo() {
  const theme = usePatternTheme();
  const [value, setValue] = useState(0.2);
  const { ref } = useMove(({ y }) => setValue(1 - y));

  return (
    <>
      <Group position="center">
        <div
          ref={ref}
          style={{
            width: 16,
            height: 120,
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
            position: 'relative',
          }}
        >
          {/* Filled bar */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              height: `${value * 100}%`,
              width: 16,
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.blue[9] : theme.colors.blue[2],
            }}
          />

          {/* Thumb */}
          <div
            style={{
              position: 'absolute',
              bottom: `calc(${value * 100}% - 8px)`,
              left: 0,
              width: 16,
              height: 16,
              backgroundColor: theme.colors.blue[7],
            }}
          />
        </div>
      </Group>

      <Text align="center" style={{ marginTop: theme.spacing.sm }}>
        Value: {Math.round(value * 100)}
      </Text>
    </>
  );
}

export const useMoveVertical: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

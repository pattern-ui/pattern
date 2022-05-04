import React from 'react';
import { useScrollIntoView } from '@pattern/hooks';
import { Button, Text, Group, usePatternTheme, Paper } from '@pattern/core';

const code = `
import { useScrollIntoView } from '@pattern/hooks';
import { Button, Paper } from '@pattern/core';

function Demo() {
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView();

  return (
    <>
      <Paper ref={scrollableRef} style={{ overflowY: 'scroll', height: 300, flex: 1 }}>
        <Paper ref={targetRef}>Scroll me into view</Paper>
      </Paper>

      <Button onClick={() => scrollIntoView()}>Scroll to target</Button>
    </>
  );
}
`;

function Demo() {
  const theme = usePatternTheme();

  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView<
    HTMLDivElement,
    HTMLDivElement
  >();

  return (
    <Group position="center">
      <Paper ref={scrollableRef} style={{ overflowY: 'scroll', height: 300, flex: 1 }}>
        <div style={{ paddingTop: 260, paddingBottom: 450 }}>
          <Paper
            ref={targetRef}
            p="xl"
            style={{
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
              width: '100%',
            }}
          >
            <Text>Scroll me into view</Text>
          </Paper>
        </div>
      </Paper>
      <Button onClick={() => scrollIntoView()}>Scroll to target</Button>
    </Group>
  );
}

export const useScrollIntoViewParent: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

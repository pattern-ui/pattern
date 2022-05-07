import React from 'react';
import { useScrollIntoView } from '@pattern/hooks';
import { Button, Text, Group, usePatternTheme, Paper } from '@pattern/core';

function Demo() {
  const theme = usePatternTheme();

  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView<
    HTMLDivElement,
    HTMLDivElement
  >({
    axis: 'x',
  });

  return (
    <Group position="center">
      <Paper ref={scrollableRef} style={{ overflowX: 'scroll', height: 150, width: 300 }}>
        <div style={{ paddingLeft: 260, paddingRight: 450 }}>
          <Paper
            ref={targetRef}
            p="md"
            style={{
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
              width: 'max-content',
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

export const useScrollIntoViewAxis: PatternDemo = {
  type: 'demo',
  component: Demo,
};

import React, { useRef } from 'react';
import { useIntersection } from '@pattern-ui/hooks';
import { Text, Paper, usePatternTheme } from '@pattern-ui/core';

export default function Demo() {
  const containerRef = useRef();
  const theme = usePatternTheme();
  const [ref, observedEntry] = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  return (
    <Paper ref={containerRef} style={{ overflowY: 'scroll', height: 300 }}>
      <div style={{ paddingTop: 260, paddingBottom: 280 }}>
        <Paper
          ref={ref}
          p="xl"
          style={{
            backgroundColor: observedEntry?.isIntersecting
              ? theme.colors.green[9]
              : theme.colors.red[9],
            minWidth: '50%',
          }}
        >
          <Text style={{ color: theme.white }} weight={700}>
            {observedEntry?.isIntersecting ? 'Fully visible' : 'Obscured'}
          </Text>
        </Paper>
      </div>
    </Paper>
  );
}

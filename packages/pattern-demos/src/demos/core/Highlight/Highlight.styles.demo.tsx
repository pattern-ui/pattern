import React from 'react';
import { Highlight } from '@pattern-ui/core';

export default function Demo() {
  return (
    <Highlight
      align="center"
      highlight={['highlighted', 'default']}
      highlightStyles={(theme) => ({
        backgroundImage: theme.fn.linearGradient(45, theme.colors.cyan[5], theme.colors.indigo[5]),
        fontWeight: 700,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      })}
    >
      You can change styles of highlighted part if you do not like default styles
    </Highlight>
  );
}

import React from 'react';
import { Highlight } from '@pattern-ui/core';

export default function Demo() {
  return (
    <Highlight
      component="a"
      href="https://pattern.icu"
      target="_blank"
      highlight="pattern"
      variant="link"
      weight={500}
    >
      Pattern website
    </Highlight>
  );
}

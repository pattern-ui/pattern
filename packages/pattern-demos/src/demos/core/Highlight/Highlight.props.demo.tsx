import React from 'react';
import { Highlight } from '@pattern/core';

function Demo() {
  return (
    <Highlight
      component="a"
      href="https://pattern-ui.design"
      target="_blank"
      highlight="pattern"
      variant="link"
      weight={500}
    >
      Pattern website
    </Highlight>
  );
}

export const props: PatternDemo = {
  type: 'demo',
  component: Demo,
};

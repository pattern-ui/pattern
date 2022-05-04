import React from 'react';
import { ArrowLeft, ArrowRight } from 'tabler-icons-react';
import { Center, usePatternTheme, Anchor, Box } from '@pattern/core';

const code = `
import { Center, Anchor, Box } from '@pattern/core';
import { ArrowLeft } from 'tabler-icons-react';

function Demo() {
  return (
    <Anchor href="https://pattern-ui.design" target="_blank">
      <Center inline>
        <ArrowLeft size={14} />
        <Box ml={5}>Back to Pattern website</Box>
      </Center>
    </Anchor>
  );
}
`;

function Demo() {
  const theme = usePatternTheme();
  return (
    <Anchor href="https://pattern-ui.design" target="_blank">
      <Center inline>
        {theme.dir === 'ltr' ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
        <Box ml={5}>Back to Pattern website</Box>
      </Center>
    </Anchor>
  );
}

export const inline: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

import React from 'react';
import { ArrowLeft, ArrowRight } from 'tabler-icons-react';
import { Center, usePatternTheme, Anchor, Box } from '@pattern-ui/core';

export default function Demo() {
  const theme = usePatternTheme();
  return (
    <Anchor href="https://pattern.icu" target="_blank">
      <Center inline>
        {theme.dir === 'ltr' ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
        <Box ml={5}>Back to Pattern website</Box>
      </Center>
    </Anchor>
  );
}

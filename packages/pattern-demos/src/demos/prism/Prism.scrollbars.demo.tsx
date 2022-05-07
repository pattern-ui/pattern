import React from 'react';
import { Text } from '@pattern/core';
import { Prism } from '@pattern/prism';

function Demo() {
  return (
    <>
      <Text mb={5}>With ScrollArea component (default):</Text>
      <Prism language="tsx">{longCode}</Prism>
      <Text mb={5} mt="xl">
        With native scrollbars:
      </Text>
      <Prism language="tsx" scrollAreaComponent="div">
        {longCode}
      </Prism>
    </>
  );
}

export const scrollbars: PatternDemo = {
  type: 'demo',
  component: Demo,
};

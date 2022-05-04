import React from 'react';
import { useOs } from '@pattern/hooks';
import { Text } from '@pattern/core';

const code = `
import { useOs } from '@pattern/hooks';

function Demo() {
  const os = useOs();
  return <>Your os is <b>{os}</b></>;
}
`;

function Demo() {
  const os = useOs();
  return (
    <Text align="center">
      Your os is <b>{os}</b>
    </Text>
  );
}

export const useOsDemo: PatternDemo = {
  type: 'demo',
  component: Demo,
  code,
};

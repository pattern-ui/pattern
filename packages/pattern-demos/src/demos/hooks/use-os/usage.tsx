import React from 'react';
import { useOs } from '@pattern/hooks';
import { Text } from '@pattern/core';

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
};

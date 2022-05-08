import React from 'react';
import { useOs } from '@pattern-ui/hooks';
import { Text } from '@pattern-ui/core';

export default function Demo() {
  const os = useOs();
  return (
    <Text align="center">
      Your os is <b>{os}</b>
    </Text>
  );
}

import React from 'react';
import { useOs } from '@pattern/hooks';
import { Text } from '@pattern/core';

export default function Demo() {
  const os = useOs();
  return (
    <Text align="center">
      Your os is <b>{os}</b>
    </Text>
  );
}

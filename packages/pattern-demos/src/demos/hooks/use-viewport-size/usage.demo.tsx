import React from 'react';
import { useViewportSize } from '@pattern-ui/hooks';
import { Text } from '@pattern-ui/core';

export default function Demo() {
  const { height, width } = useViewportSize();

  return (
    <Text align="center">
      Width: {width}, height: {height}
    </Text>
  );
}

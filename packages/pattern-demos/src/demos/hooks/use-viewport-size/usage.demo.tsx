import React from 'react';
import { useViewportSize } from '@pattern/hooks';
import { Text } from '@pattern/core';

export default function Demo() {
  const { height, width } = useViewportSize();

  return (
    <Text align="center">
      Width: {width}, height: {height}
    </Text>
  );
}

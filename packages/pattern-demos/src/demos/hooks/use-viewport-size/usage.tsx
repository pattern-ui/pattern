import React from 'react';
import { useViewportSize } from '@pattern/hooks';
import { Text } from '@pattern/core';

function Demo() {
  const { height, width } = useViewportSize();

  return (
    <Text align="center">
      Width: {width}, height: {height}
    </Text>
  );
}

export const useViewportSizeDemo: PatternDemo = {
  type: 'demo',
  component: Demo,
};

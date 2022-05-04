import React from 'react';
import { useViewportSize } from '@pattern/hooks';
import { Text } from '@pattern/core';

const code = `
import { useViewportSize } from '@pattern/hooks';

function Demo() {
  const { height, width } = useViewportSize();
  return <>Width: {width}, height: {height}</>;
}
`;

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
  code,
  component: Demo,
};

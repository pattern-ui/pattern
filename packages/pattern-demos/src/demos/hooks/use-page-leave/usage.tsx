import React, { useState } from 'react';
import { usePageLeave } from '@pattern/hooks';
import { Text } from '@pattern/core';

const code = `
import { useState } from 'react';
import { usePageLeave } from '@pattern/hooks';

function Demo() {
  const [leftsCount, setLeftsCount] = useState(0);
  usePageLeave(() => setLeftsCount((p) => p + 1));
  return <>Mouse left the page {leftsCount} times</>;
}
`;

function Demo() {
  const [leftsCount, setLeftsCount] = useState(0);
  usePageLeave(() => setLeftsCount((p) => p + 1));
  return <Text align="center">Mouse left the page {leftsCount} times</Text>;
}

export const usePageLeaveDemo: PatternDemo = {
  type: 'demo',
  component: Demo,
  code,
};

import React, { useState } from 'react';
import { usePageLeave } from '@pattern-ui/hooks';
import { Text } from '@pattern-ui/core';

export default function Demo() {
  const [leftsCount, setLeftsCount] = useState(0);
  usePageLeave(() => setLeftsCount((p) => p + 1));
  return <Text align="center">Mouse left the page {leftsCount} times</Text>;
}

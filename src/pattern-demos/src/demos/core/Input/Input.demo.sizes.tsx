import React from 'react';
import { Input, PATTERN_SIZES } from '@pattern/core';

function Demo() {
  const inputs = PATTERN_SIZES.map((size, index) => (
    <Input
      style={{ marginTop: index === 0 ? 0 : 15 }}
      size={size}
      key={size}
      placeholder={`${size} input size`}
    />
  ));
  return <>{inputs}</>;
}

export const sizes: PatternDemo = {
  type: 'demo',
  component: Demo,
};

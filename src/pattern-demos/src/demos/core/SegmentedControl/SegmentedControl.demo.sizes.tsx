import React from 'react';
import { PATTERN_SIZES } from '@pattern/core';
import { SegmentedControlWrapper } from './Wrapper';

function Demo() {
  const items = PATTERN_SIZES.map((size, index) => (
    <div style={{ marginTop: index === 0 ? 0 : 15 }} key={size}>
      <SegmentedControlWrapper size={size} />
    </div>
  ));

  return <>{items}</>;
}

export const sizes: PatternDemo = {
  type: 'demo',
  component: Demo,
};

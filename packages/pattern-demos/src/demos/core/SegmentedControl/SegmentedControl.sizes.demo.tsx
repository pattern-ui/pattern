import React from 'react';
import { PATTERN_SIZES } from '@pattern-ui/core';
import { SegmentedControlWrapper } from './Wrapper';

export default function Demo() {
  const items = PATTERN_SIZES.map((size, index) => (
    <div style={{ marginTop: index === 0 ? 0 : 15 }} key={size}>
      <SegmentedControlWrapper size={size} />
    </div>
  ));

  return <>{items}</>;
}

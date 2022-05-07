import React from 'react';
import { SegmentedControlWrapper } from './Wrapper';

function Demo() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <SegmentedControlWrapper />
    </div>
  );
}

export const usage: PatternDemo = {
  type: 'demo',
  component: Demo,
};

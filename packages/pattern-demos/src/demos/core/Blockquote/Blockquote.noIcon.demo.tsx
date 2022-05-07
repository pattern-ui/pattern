import React from 'react';
import { Blockquote } from '@pattern/core';

function Demo() {
  return (
    <div style={{ maxWidth: 420, margin: 'auto' }}>
      <Blockquote cite="– Your poor i3 from 2012 struggling its best" icon={null}>
        webpack built 40a9bf3d1a0a0914ed84 in 28259ms
      </Blockquote>
    </div>
  );
}

export const noIcon: PatternDemo = {
  type: 'demo',
  component: Demo,
};

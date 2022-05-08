import React from 'react';
import { Text } from '@pattern-ui/core';
import { SegmentedControlWrapper } from './Wrapper';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div>
        <Text size="sm" weight={500} style={{ marginBottom: 3 }}>
          No transitions
        </Text>
        <SegmentedControlWrapper transitionDuration={0} />
      </div>

      <div style={{ marginTop: 15 }}>
        <Text size="sm" weight={500} style={{ marginBottom: 3 }}>
          500ms linear transition
        </Text>
        <SegmentedControlWrapper transitionDuration={500} transitionTimingFunction="linear" />
      </div>
    </div>
  );
}

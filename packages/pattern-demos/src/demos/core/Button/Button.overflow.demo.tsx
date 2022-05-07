import React from 'react';
import { Button, Group } from '@pattern/core';

function Demo() {
  return (
    <Group>
      <div style={{ width: 200 }}>
        <Button fullWidth variant="outline">
          Full width button
        </Button>
      </div>

      <div style={{ width: 140 }}>
        <Button fullWidth variant="outline">
          Button with overflow
        </Button>
      </div>
    </Group>
  );
}

export const overflow: PatternDemo = {
  type: 'demo',
  component: Demo,
};

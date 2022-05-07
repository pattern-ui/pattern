import React from 'react';
import { Button, Group } from '@pattern/core';

export default function Demo() {
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

import React from 'react';
import { Group, ScrollArea } from '@pattern-ui/core';
import { Content } from './_content';

export default function Demo() {
  return (
    <Group position="center">
      <ScrollArea style={{ width: 300, height: 200 }}>
        <div style={{ width: 600 }}>
          <Content />
        </div>
      </ScrollArea>
    </Group>
  );
}

import React from 'react';
import { Group, ScrollArea } from '@pattern/core';
import { Content } from './_content';

function Demo() {
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

export const horizontal: PatternDemo = {
  type: 'demo',
  component: Demo,
};

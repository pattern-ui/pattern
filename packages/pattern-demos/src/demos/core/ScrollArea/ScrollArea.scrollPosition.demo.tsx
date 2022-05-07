import React, { useState } from 'react';
import { Group, Code, Text, ScrollArea } from '@pattern-ui/core';
import { Content } from './_content';

export default function Demo() {
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });

  return (
    <Group position="center" direction="column">
      <ScrollArea
        style={{ width: 300, height: 200 }}
        onScrollPositionChange={onScrollPositionChange}
      >
        <div style={{ width: 600 }}>
          <Content />
        </div>
      </ScrollArea>
      <Text>
        Scroll position: <Code>{`{ x: ${scrollPosition.x}, y: ${scrollPosition.y} }`}</Code>
      </Text>
    </Group>
  );
}

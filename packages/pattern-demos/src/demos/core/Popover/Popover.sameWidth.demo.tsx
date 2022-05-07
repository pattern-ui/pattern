import React from 'react';
import { Popover, Text, Button } from '@pattern-ui/core';

export default function Demo() {
  return (
    <Popover width="target" position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button sx={{ width: 280 }}>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm">
          This popover has same width as target, it is useful when you are building input dropdowns
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}

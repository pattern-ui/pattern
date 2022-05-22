import React from 'react';
import { Popover, Button, TextInput } from '@pattern-ui/core';

export default function Demo() {
  return (
    <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <TextInput variant="default" placeholder="Name" size="xs" />
        <TextInput variant="default" placeholder="john@doe.com" size="xs" mt="xs" />
      </Popover.Dropdown>
    </Popover>
  );
}

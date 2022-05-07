import React from 'react';
import { Popover, Button, TextInput } from '@pattern/core';

export default function Demo() {
  return (
    <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <TextInput variant="default" label="Name" placeholder="Name" size="xs" />
        <TextInput variant="default" label="Email" placeholder="john@doe.com" size="xs" mt="xs" />
      </Popover.Dropdown>
    </Popover>
  );
}

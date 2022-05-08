import React from 'react';
import { Tooltip, Group, Button } from '@pattern-ui/core';

export default function Demo() {
  return (
    <Group position="center">
      <Tooltip
        multiline
        width={220}
        withArrow
        transition="fade"
        transitionDuration={200}
        label="Use this button to save this information in your profile, after that you will be able to access it any time and share it via email."
      >
        <Button variant="outline">Multiline tooltip</Button>
      </Tooltip>
    </Group>
  );
}

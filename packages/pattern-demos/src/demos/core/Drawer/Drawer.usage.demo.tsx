import React, { useState } from 'react';
import { Drawer, Button, Group } from '@pattern-ui/core';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';

export default function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        title="Register"
        size="xl"
      >
        <AuthenticationForm noPadding noShadow />
      </Drawer>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Drawer</Button>
      </Group>
    </>
  );
}

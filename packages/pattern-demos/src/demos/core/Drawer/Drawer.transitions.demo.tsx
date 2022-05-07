import React, { useState } from 'react';
import { Drawer, Button, Group } from '@pattern/core';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        size="xl"
        title="Register"
        transition="rotate-left"
        transitionDuration={250}
        transitionTimingFunction="ease"
      >
        <AuthenticationForm noPadding noShadow />
      </Drawer>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Drawer</Button>
      </Group>
    </>
  );
}

export const transitions: PatternDemo = {
  type: 'demo',
  component: Demo,
};

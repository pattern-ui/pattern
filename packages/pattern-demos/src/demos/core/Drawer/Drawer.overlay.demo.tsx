import React, { useState } from 'react';
import { Drawer, Group, Button, usePatternTheme } from '@pattern/core';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';

function Demo() {
  const [opened, setOpened] = useState(false);
  const theme = usePatternTheme();

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        size="xl"
        title="Introduce yourself!"
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
      >
        <AuthenticationForm noPadding noShadow />
      </Drawer>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Drawer</Button>
      </Group>
    </>
  );
}

export const overlay: PatternDemo = {
  type: 'demo',
  component: Demo,
};

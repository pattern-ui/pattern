import React, { useState } from 'react';
import { Modal, Group, Button, usePatternTheme } from '@pattern/core';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';

export default function Demo() {
  const [opened, setOpened] = useState(false);
  const theme = usePatternTheme();

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
      >
        <AuthenticationForm noPadding noShadow />
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </>
  );
}

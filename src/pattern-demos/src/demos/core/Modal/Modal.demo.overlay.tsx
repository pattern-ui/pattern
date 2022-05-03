import React, { useState } from 'react';
import { Modal, Group, Button, usePatternTheme } from '@pattern/core';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';

const code = `
import { Modal, usePatternTheme } from '@pattern/core';

function Demo() {
  const theme = usePatternTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
    >
      {/* Modal content */}
    </Modal>
  );
}
`;

function Demo() {
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

export const overlay: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

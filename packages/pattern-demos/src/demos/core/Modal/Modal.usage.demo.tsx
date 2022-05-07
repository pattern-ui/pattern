import React, { useState } from 'react';
import { Modal, Group, Button } from '@pattern/core';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} title="Introduce yourself!">
        <AuthenticationForm noShadow noPadding />
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </>
  );
}

export const usage: PatternDemo = {
  type: 'demo',
  component: Demo,
};

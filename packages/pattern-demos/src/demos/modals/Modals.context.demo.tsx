import React from 'react';
import { Group, Button } from '@pattern/core';
import { useModals } from '@pattern/modals';

export default function Demo() {
  const modals = useModals();

  const openContextModal = () =>
    modals.openContextModal('demonstration', {
      title: 'Test modal from context',
      innerProps: {
        modalBody:
          'This modal was defined in ModalsProvider, you can open it anywhere in you app with useModals hook',
      },
    });

  return (
    <Group position="center">
      <Button onClick={openContextModal}>Open demonstration context modal</Button>
    </Group>
  );
}

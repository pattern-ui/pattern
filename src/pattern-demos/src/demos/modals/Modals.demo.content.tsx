import React from 'react';
import { TextInput, Button, Group } from '@pattern/core';
import { useModals } from '@pattern/modals';

const code = `
import { TextInput, Button } from '@pattern/core';
import { useModals } from '@pattern/modals';

function Demo() {
  const modals = useModals();

  const openContentModal = () => {
    const id = modals.openModal({
      title: 'Subscribe to newsletter',
      children: (
        <>
          <TextInput label="Your email" />
          <Button fullWidth onClick={() => modals.closeModal(id)}>
            Submit
          </Button>
        </>
      ),
    });
  };

  return <Button onClick={openContentModal}>Open content modal</Button>;
}
`;

function Demo() {
  const modals = useModals();

  const openContentModal = () => {
    const id = modals.openModal({
      title: 'Subscribe to newsletter',
      children: (
        <>
          <TextInput label="Your email" placeholder="Your email" />
          <Button fullWidth onClick={() => modals.closeModal(id)} mt="md">
            Submit
          </Button>
        </>
      ),
    });
  };

  return (
    <Group position="center">
      <Button onClick={openContentModal}>Open content modal</Button>
    </Group>
  );
}

export const content: PatternDemo = {
  type: 'demo',
  component: Demo,
  code,
};

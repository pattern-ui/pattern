import React from 'react';
import { Group, Button, Text } from '@pattern-ui/core';
import { useModals } from '@pattern-ui/modals';
import { useNotifications } from '@pattern-ui/notifications';

export default function Demo() {
  const notifications = useNotifications();
  const modals = useModals();

  const openConfirmModal = () =>
    modals.openConfirmModal({
      title: 'Please confirm your action',
      children: (
        <Text size="sm">
          This action is so important that you are required to confirm it with a modal. Please click
          one of these buttons to proceed.
        </Text>
      ),
      onCancel: () =>
        notifications.showNotification({
          title: 'Canceled',
          message: 'Confirm modal was canceled',
          color: 'gray',
        }),
      onConfirm: () =>
        notifications.showNotification({
          title: 'Confirmed',
          message: 'Confirm modal was confirmed',
          color: 'teal',
        }),
    });

  return (
    <Group position="center">
      <Button onClick={openConfirmModal}>Open confirm modal</Button>
    </Group>
  );
}

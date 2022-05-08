import React from 'react';
import { Group, Button, Text } from '@pattern-ui/core';
import { useModals } from '@pattern-ui/modals';
import { useNotifications } from '@pattern-ui/notifications';

export default function Demo() {
  const notifications = useNotifications();
  const modals = useModals();

  const openDeleteModal = () =>
    modals.openConfirmModal({
      title: 'Delete your profile',
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete your profile? This action is destructive and you will have
          to contact support to restore your data.
        </Text>
      ),
      labels: { confirm: 'Delete account', cancel: "No don't delete it" },
      confirmProps: { color: 'red' },
      onCancel: () =>
        notifications.showNotification({
          title: 'Canceled',
          message: 'Delete modal was canceled',
          color: 'gray',
        }),
      onConfirm: () =>
        notifications.showNotification({
          title: 'Deleted',
          message: 'Delete modal was confirmed',
          color: 'red',
        }),
    });

  return (
    <Group position="center">
      <Button onClick={openDeleteModal} color="red">
        Delete account
      </Button>
    </Group>
  );
}

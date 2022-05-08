import React from 'react';
import { Group, Button } from '@pattern-ui/core';
import { showNotification } from '@pattern-ui/notifications';

export default function Demo() {
  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() => {
          Array(10)
            .fill(0)
            .forEach((_, index) => {
              setTimeout(() => {
                showNotification({
                  title: `Notification ${index + 1}`,
                  message: 'Most notifications are added to queue',
                });
              }, 200 * index);
            });
        }}
      >
        Show 10 notifications
      </Button>
    </Group>
  );
}

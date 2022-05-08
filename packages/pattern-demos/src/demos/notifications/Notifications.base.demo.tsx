import React from 'react';
import { Group, Button } from '@pattern-ui/core';
import { showNotification } from '@pattern-ui/notifications';

export default function Demo() {
  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() =>
          showNotification({
            title: 'Default notification',
            message: 'Hey there, your code is awesome! 🤥',
          })
        }
      >
        Show notification
      </Button>
    </Group>
  );
}

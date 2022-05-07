import React from 'react';
import { Group, Button } from '@pattern/core';
import { showNotification } from '@pattern/notifications';

export default function Demo() {
  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() => showNotification({ message: 'I will close in 4 seconds' })}
      >
        Notifications Provider timeout
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          showNotification({
            message: 'I will close in 500ms',
            autoClose: 500,
          })
        }
      >
        Closes in 500ms
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          showNotification({
            color: 'blue',
            title: 'I will never close',
            message: 'unless you click X',
            autoClose: false,
          })
        }
      >
        Never closes automatically
      </Button>
    </Group>
  );
}

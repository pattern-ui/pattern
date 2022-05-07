import React from 'react';
import { Group, Button } from '@pattern/core';
import { showNotification } from '@pattern/notifications';

function Demo() {
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

export const base: PatternDemo = {
  type: 'demo',
  component: Demo,
};

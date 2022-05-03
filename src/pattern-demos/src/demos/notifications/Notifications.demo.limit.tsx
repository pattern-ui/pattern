import React from 'react';
import { Group, Button } from '@pattern/core';
import { showNotification } from '@pattern/notifications';

const code = `
import { Group, Button } from '@pattern/core';
import { showNotification } from '@pattern/notifications';

function Demo() {
  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() => {
          Array(10).fill(0).forEach((_, index) => {
            setTimeout(() => {
              showNotification({
                title: \`Notification \${index + 1}\`,
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
}`;

function Demo() {
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

export const limit: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

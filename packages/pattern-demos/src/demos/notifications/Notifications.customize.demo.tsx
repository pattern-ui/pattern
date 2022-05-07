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
            styles: (theme) => ({
              root: {
                backgroundColor: theme.colors.blue[6],
                borderColor: theme.colors.blue[6],

                '&::before': { backgroundColor: theme.white },
              },

              title: { color: theme.white },
              description: { color: theme.white },
              closeButton: {
                color: theme.white,
                '&:hover': { backgroundColor: theme.colors.blue[7] },
              },
            }),
          })
        }
      >
        Show customized notification
      </Button>
    </Group>
  );
}

export const customize: PatternDemo = {
  type: 'demo',
  component: Demo,
};

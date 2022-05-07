import React from 'react';
import { Button, Group } from '@pattern/core';

export default function Demo() {
  return (
    <Group position="center">
      <Button
        sx={(theme) => ({
          borderColor: theme.colors.blue[9],

          '&:hover': {
            backgroundColor: theme.colors.blue[9],
          },
        })}
      >
        Button with sx styles
      </Button>
    </Group>
  );
}

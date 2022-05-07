import React, { useState } from 'react';
import { Paper, Button, Group, usePatternTheme } from '@pattern/core';
import { useClickOutside } from '@pattern/hooks';

export default function Demo() {
  const theme = usePatternTheme();
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));

  return (
    <>
      <div style={{ position: 'relative' }}>
        <Group position="center">
          <Button onClick={() => setOpened(true)}>Open dropdown</Button>
        </Group>

        {opened && (
          <Paper
            ref={ref}
            shadow="sm"
            sx={{
              width: 300,
              height: 60,
              position: 'absolute',
              top: 0,
              left: 'calc(50% - 150px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
            }}
          >
            <span>Click outside to close</span>
          </Paper>
        )}
      </div>
    </>
  );
}

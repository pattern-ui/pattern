import React, { useState } from 'react';
import { useClickOutside } from '@pattern-ui/hooks';
import { Transition, Paper, Button, usePatternTheme } from '@pattern-ui/core';

const scaleY = {
  in: { opacity: 1, transform: 'scaleY(1)' },
  out: { opacity: 0, transform: 'scaleY(0)' },
  common: { transformOrigin: 'top' },
  transitionProperty: 'transform, opacity',
};

export default function Demo() {
  const [opened, setOpened] = useState(false);
  const clickOutsideRef = useClickOutside(() => setOpened(false));
  const theme = usePatternTheme();

  return (
    <div
      style={{
        maxWidth: 200,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
      }}
    >
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>
      <Transition mounted={opened} transition={scaleY} duration={200} timingFunction="ease">
        {(styles) => (
          <Paper
            shadow="md"
            ref={clickOutsideRef}
            style={{
              ...styles,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 120,
              padding: theme.spacing.xl,
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
            }}
          >
            Dropdown
          </Paper>
        )}
      </Transition>
    </div>
  );
}

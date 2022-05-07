import React from 'react';
import { createStyles, keyframes } from '@pattern-ui/core';

const bounce = keyframes({
  'from, 20%, 53%, 80%, to': { transform: 'translate3d(0, 0, 0)' },
  '40%, 43%': { transform: 'translate3d(0, -30px, 0)' },
  '70%': { transform: 'translate3d(0, -15px, 0)' },
  '90%': { transform: 'translate3d(0, -4px, 0)' },
});

const useStyles = createStyles((theme) => ({
  container: {
    textAlign: 'center',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    padding: theme.spacing.xl,
    animation: `${bounce} 3s ease-in-out infinite`,
  },
}));

export default function Demo() {
  const { classes } = useStyles();
  return <div className={classes.container}>Keyframes demo</div>;
}

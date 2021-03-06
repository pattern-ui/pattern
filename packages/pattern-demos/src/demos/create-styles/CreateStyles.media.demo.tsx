import React from 'react';
import { createStyles } from '@pattern-ui/core';

const useStyles = createStyles((theme) => ({
  container: {
    height: 100,
    backgroundColor: theme.colors.blue[6],

    // Media query with value from theme
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      backgroundColor: theme.colors.pink[6],
    },

    // Static media query
    '@media (max-width: 800px)': {
      backgroundColor: theme.colors.orange[6],
    },
  },
}));

export default function Demo() {
  const { classes } = useStyles();
  return <div className={classes.container} />;
}

import React from 'react';
import { Chips, Chip, createStyles } from '@pattern-ui/core';

const useStyles = createStyles((theme, _params, getRef) => ({
  iconWrapper: {
    ref: getRef('iconWrapper'),
  },

  checked: {
    backgroundColor: `${theme.colors.blue[6]} !important`,
    color: theme.white,

    [`& .${getRef('iconWrapper')}`]: {
      color: theme.white,
    },
  },
}));

export default function Demo() {
  const { classes } = useStyles();

  return (
    <Chips position="center" multiple classNames={classes} defaultValue={['react']}>
      <Chip value="react">React</Chip>
      <Chip value="ng">Angular</Chip>
      <Chip value="vue">Vue</Chip>
      <Chip value="svelte">Svelte</Chip>
    </Chips>
  );
}

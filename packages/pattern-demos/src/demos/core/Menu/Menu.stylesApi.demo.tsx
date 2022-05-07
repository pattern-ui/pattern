import React from 'react';
import { createStyles, Menu, Group } from '@pattern-ui/core';
import { menuItems } from './_menu-items';

const useStyles = createStyles((theme) => ({
  itemHovered: {
    backgroundColor: theme.colors[theme.primaryColor][7],
    color: theme.white,
  },
}));

export default function Demo() {
  const { classes } = useStyles();
  const items = [...menuItems];
  items.splice(4, 1);
  return (
    <Group position="center">
      <Menu classNames={classes}>{items}</Menu>
    </Group>
  );
}

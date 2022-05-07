import React from 'react';
import { Group, createStyles } from '@pattern-ui/core';
import { Month } from '@pattern-ui/dates';

const useStyles = createStyles((theme) => ({
  outside: {
    opacity: 0,
  },

  weekend: {
    color: `${theme.colors.blue[6]} !important`,
  },
}));

export default function Demo() {
  const { classes, cx } = useStyles();

  return (
    <Group position="center">
      <Month
        disableOutsideEvents
        month={new Date(2021, 7)}
        dayClassName={(date, modifiers) =>
          cx({ [classes.outside]: modifiers.outside, [classes.weekend]: modifiers.weekend })
        }
      />
    </Group>
  );
}

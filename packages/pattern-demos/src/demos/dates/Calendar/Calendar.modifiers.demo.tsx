import React from 'react';
import { Group, createStyles } from '@pattern/core';
import { Calendar } from '@pattern/dates';

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
      <Calendar
        disableOutsideEvents
        initialMonth={new Date(2021, 7)}
        dayClassName={(date, modifiers) =>
          cx({ [classes.outside]: modifiers.outside, [classes.weekend]: modifiers.weekend })
        }
      />
    </Group>
  );
}

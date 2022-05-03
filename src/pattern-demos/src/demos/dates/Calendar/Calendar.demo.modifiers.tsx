import React from 'react';
import { Group, createStyles } from '@pattern/core';
import { Calendar } from '@pattern/dates';

const code = `
import { createStyles } from '@pattern/core';
import { Calendar } from '@pattern/dates';

const useStyles = createStyles((theme) => ({
  outside: {
    opacity: 0,
  },

  weekend: {
    color: \`\${theme.colors.blue[6]} !important\`,
  },
}));


function Demo() {
  const { classes, cx } = useStyles();

  return (
    <Calendar
      disableOutsideEvents
      initialMonth={new Date(2021, 7)}
      dayClassName={(date, modifiers) =>
        cx({ [classes.outside]: modifiers.outside, [classes.weekend]: modifiers.weekend })
      }
    />
  );
}
`;

const useStyles = createStyles((theme) => ({
  outside: {
    opacity: 0,
  },

  weekend: {
    color: `${theme.colors.blue[6]} !important`,
  },
}));

function Demo() {
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

export const modifiers: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

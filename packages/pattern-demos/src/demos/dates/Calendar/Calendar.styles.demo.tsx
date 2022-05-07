import React from 'react';
import { Group, usePatternTheme } from '@pattern/core';
import { Calendar } from '@pattern/dates';

function Demo() {
  const theme = usePatternTheme();

  return (
    <Group position="center">
      <Calendar
        initialMonth={new Date(2021, 7)}
        dayStyle={(date) =>
          date.getDay() === 5 && date.getDate() === 13
            ? { backgroundColor: theme.colors.red[9], color: theme.white }
            : null
        }
      />
    </Group>
  );
}

export const styles: PatternDemo = {
  type: 'demo',
  component: Demo,
};

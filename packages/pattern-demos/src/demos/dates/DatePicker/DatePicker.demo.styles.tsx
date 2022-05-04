import React from 'react';
import { usePatternTheme } from '@pattern/core';
import { DatePicker } from '@pattern/dates';

const code = `
import { usePatternTheme } from '@pattern/core';
import { DatePicker } from '@pattern/dates';

function Demo() {
  const theme = usePatternTheme();

  return (
    <DatePicker
      placeholder="Pick date"
      label="Event date"
      dayStyle={(date) =>
        date.getDay() === 5 && date.getDate() === 13
          ? { backgroundColor: theme.colors.red[9], color: theme.white }
          : null
      }
    />
  );
}
`;

function Demo() {
  const theme = usePatternTheme();

  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker
        placeholder="Pick date"
        label="Event date"
        dayStyle={(date) =>
          date.getDay() === 5 && date.getDate() === 13
            ? { backgroundColor: theme.colors.red[9], color: theme.white }
            : null
        }
      />
    </div>
  );
}

export const styles: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

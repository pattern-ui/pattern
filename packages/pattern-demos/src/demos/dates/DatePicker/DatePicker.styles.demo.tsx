import React from 'react';
import { usePatternTheme } from '@pattern/core';
import { DatePicker } from '@pattern/dates';

export default function Demo() {
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

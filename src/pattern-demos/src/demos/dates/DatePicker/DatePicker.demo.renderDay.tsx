import React from 'react';
import { DatePicker } from '@pattern/dates';
import { Indicator } from '@pattern/core';

const code = `
import { DatePicker } from '@pattern/dates';
import { Indicator } from '@pattern/core';

function Demo() {
  return (
    <DatePicker
      placeholder="Pick date"
      label="Event date"
      renderDay={(date) => {
        const day = date.getDate();
        return (
          <Indicator size={6} color="red" offset={8} disabled={day !== 16}>
            <div>{day}</div>
          </Indicator>
        );
      }}
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker
        placeholder="Pick date"
        label="Event date"
        renderDay={(date) => {
          const day = date.getDate();
          return (
            <Indicator size={6} color="red" offset={8} disabled={day !== 16}>
              <div>{day}</div>
            </Indicator>
          );
        }}
      />
    </div>
  );
}

export const renderDay: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

import React from 'react';
import { MultiSelect } from '@pattern/core';
import { data } from './_data';

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <MultiSelect
        data={data}
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
      />
    </div>
  );
}

export const usage: PatternDemo = {
  type: 'demo',
  component: Demo,
};

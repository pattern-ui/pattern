import React from 'react';
import { MultiSelect } from '@pattern/core';
import { data } from './_data';

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <MultiSelect
        data={data}
        label="Pick 3 values or less"
        placeholder="Pick 3 values or less"
        searchable
        maxSelectedValues={3}
      />
    </div>
  );
}

export const maxSelectedValues: PatternDemo = {
  type: 'demo',
  component: Demo,
};

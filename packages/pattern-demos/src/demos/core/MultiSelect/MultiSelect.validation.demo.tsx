import React from 'react';
import { MultiSelect } from '@pattern-ui/core';
import { data } from './_data';

export default function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <MultiSelect
        data={data}
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
        error
      />

      <MultiSelect
        style={{ marginTop: 15 }}
        data={data}
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
        error="Pick at least one item"
      />
    </div>
  );
}

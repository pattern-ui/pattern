import React from 'react';
import { MultiSelect } from '@pattern-ui/core';
import { data } from './_data';

export default function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <MultiSelect
        data={data}
        transitionDuration={150}
        transition="pop-top-left"
        transitionTimingFunction="ease"
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
      />
    </div>
  );
}

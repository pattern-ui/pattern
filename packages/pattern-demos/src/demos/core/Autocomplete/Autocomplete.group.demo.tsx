import React from 'react';
import { Autocomplete } from '@pattern-ui/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Autocomplete
        placeholder="Pick one"
        data={[
          { value: 'Rick', group: 'Used to be a pickle' },
          { value: 'Morty', group: 'Never was a pickle' },
          { value: 'Beth', group: 'Never was a pickle' },
          { value: 'Summer', group: 'Never was a pickle' },
        ]}
      />
    </div>
  );
}

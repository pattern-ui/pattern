import React from 'react';
import { Select } from '@pattern-ui/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Select
        placeholder="Pick one"
        data={[
          { value: 'rick', label: 'Rick', group: 'Used to be a pickle' },
          { value: 'morty', label: 'Morty', group: 'Never was a pickle' },
          { value: 'beth', label: 'Beth', group: 'Never was a pickle' },
          { value: 'summer', label: 'Summer', group: 'Never was a pickle' },
        ]}
      />
    </div>
  );
}

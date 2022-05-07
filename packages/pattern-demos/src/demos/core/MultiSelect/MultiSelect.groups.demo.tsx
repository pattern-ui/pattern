import React from 'react';
import { MultiSelect } from '@pattern/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <MultiSelect
        label="Your favorite Rick and Morty character"
        placeholder="Pick all that you like"
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

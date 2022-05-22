import React from 'react';
import { Select } from '@pattern-ui/core';

export default function Demo() {
  const data = Array(50)
    .fill(0)
    .map((_, index) => `Item ${index}`);

  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Select
        placeholder="Pick one"
        searchable
        nothingFound="No options"
        maxDropdownHeight={280}
        data={data}
      />
    </div>
  );
}

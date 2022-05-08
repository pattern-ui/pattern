import React from 'react';
import { MultiSelect } from '@pattern-ui/core';

const data = Array(50)
  .fill(0)
  .map((_, index) => `Item ${index}`);

export default function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <MultiSelect
        data={data}
        label="Large data set"
        placeholder="Scroll to see all options"
        maxDropdownHeight={160}
      />
    </div>
  );
}

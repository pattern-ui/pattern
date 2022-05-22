import React, { useState } from 'react';
import { Select } from '@pattern-ui/core';

export default function Demo() {
  const [data, setData] = useState(['React', 'Angular', 'Svelte', 'Vue']);

  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Select
        data={data}
        placeholder="Select items"
        nothingFound="Nothing found"
        searchable
        creatable
        getCreateLabel={(query) => `+ Create ${query}`}
        onCreate={(query) => setData((current) => [...current, query])}
      />
    </div>
  );
}

import React, { useState } from 'react';
import { MultiSelect } from '@pattern/core';

const code = `
import { useState } from 'react';
import { MultiSelect } from '@pattern/core';

function Demo() {
  const [data, setData] = useState(['React', 'Angular', 'Svelte', 'Vue']);

  return (
    <MultiSelect
      label="Creatable MultiSelect"
      data={data}
      placeholder="Select items"
      searchable
      creatable
      getCreateLabel={(query) => \`+ Create \${query}\`}
      onCreate={(query) => setData((current) => [...current, query])}
    />
  );
}
`;

export function Demo() {
  const [data, setData] = useState(['React', 'Angular', 'Svelte', 'Vue']);

  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <MultiSelect
        label="Creatable MultiSelect"
        data={data}
        placeholder="Select items"
        searchable
        creatable
        getCreateLabel={(query) => `+ Create ${query}`}
        onCreate={(query) => setData((current) => [...current, query])}
      />
    </div>
  );
}

export const creatable: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

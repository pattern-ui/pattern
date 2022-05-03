import React from 'react';
import { MultiSelect } from '@pattern/core';
import { data } from './_data';

const code = `
import { MultiSelect } from '@pattern/core';

function Demo() {
  return (
    <MultiSelect
      data={['React', 'Angular', 'Svelte', 'Vue', 'Riot', 'Next.js', 'Blitz.js']}
      label="Your favorite frameworks/libraries"
      placeholder="Pick all that you like"
      searchable
      nothingFound="Nothing found"
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <MultiSelect
        data={data}
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
        searchable
        nothingFound="Nothing found"
      />
    </div>
  );
}

export const searchable: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

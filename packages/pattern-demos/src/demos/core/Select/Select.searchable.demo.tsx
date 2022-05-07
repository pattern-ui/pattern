import React from 'react';
import { Select } from '@pattern/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Select
        label="Your favorite framework/library"
        placeholder="Pick one"
        searchable
        nothingFound="No options"
        data={['React', 'Angular', 'Svelte', 'Vue']}
      />
    </div>
  );
}

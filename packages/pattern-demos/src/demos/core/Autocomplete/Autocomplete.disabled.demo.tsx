import React from 'react';
import { Autocomplete } from '@pattern-ui/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Autocomplete
        data={['React', 'Angular', 'Svelte', 'Vue']}
        placeholder="Pick all that you like"
        disabled
      />

      <Autocomplete
        style={{ marginTop: 15 }}
        data={['React', 'Angular', 'Svelte', 'Vue']}
        placeholder="Pick all that you like"
        disabled
        value="React"
      />
    </div>
  );
}

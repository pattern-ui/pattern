import React from 'react';
import { NativeSelect } from '@pattern-ui/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <NativeSelect
        data={['React', 'Angular', 'Svelte', 'Vue']}
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
        error
      />

      <NativeSelect
        style={{ marginTop: 15 }}
        data={['React', 'Angular', 'Svelte', 'Vue']}
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
        error="Pick at least one item"
      />
    </div>
  );
}

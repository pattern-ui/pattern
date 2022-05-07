import React from 'react';
import { Autocomplete } from '@pattern-ui/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Autocomplete
        label="Your favorite framework/library"
        placeholder="Pick one"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        transition="pop-top-left"
        transitionDuration={80}
        transitionTimingFunction="ease"
      />
    </div>
  );
}

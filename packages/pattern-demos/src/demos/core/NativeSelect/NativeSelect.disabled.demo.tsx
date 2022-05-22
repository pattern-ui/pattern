import React from 'react';
import { NativeSelect } from '@pattern-ui/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <NativeSelect
        data={['React', 'Angular', 'Svelte', 'Vue']}
        placeholder="Pick one that you like"
        disabled
      />
    </div>
  );
}

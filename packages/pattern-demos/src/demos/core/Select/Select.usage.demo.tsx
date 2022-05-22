import React from 'react';
import { Select } from '@pattern-ui/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Select
        placeholder="Pick one"
        data={[
          { value: 'react', label: 'React' },
          { value: 'ng', label: 'Angular' },
          { value: 'svelte', label: 'Svelte' },
          { value: 'vue', label: 'Vue' },
        ]}
      />
    </div>
  );
}

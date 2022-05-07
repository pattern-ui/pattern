import React from 'react';
import { Hash } from 'tabler-icons-react';
import { Select } from '@pattern/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Select
        label="Pick a hashtag"
        placeholder="Pick a hashtag"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        icon={<Hash size={14} />}
      />
    </div>
  );
}

import React from 'react';
import { Hash } from 'tabler-icons-react';
import { NativeSelect } from '@pattern/core';

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <NativeSelect
        label="Pick a hashtag"
        placeholder="Pick a hashtag"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        icon={<Hash size={14} />}
      />
    </div>
  );
}

export const icon: PatternDemo = {
  type: 'demo',
  component: Demo,
};

import React from 'react';
import { Hash } from 'tabler-icons-react';
import { Select } from '@pattern/core';

const code = `
import { Select } from '@pattern/core';
import { Hash } from 'tabler-icons-react';

function Demo() {
  return (
    <Select
      label="Pick a hashtag"
      placeholder="Pick a hashtag"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      icon={<Hash size={14} />}
    />
  );
}
`;

function Demo() {
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

export const icon: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

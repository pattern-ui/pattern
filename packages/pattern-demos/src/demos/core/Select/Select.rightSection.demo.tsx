import React from 'react';
import { ChevronDown } from 'tabler-icons-react';
import { Select } from '@pattern/core';

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Select
        label="Your favorite framework/library"
        placeholder="Pick one"
        rightSection={<ChevronDown size={14} />}
        rightSectionWidth={30}
        styles={{ rightSection: { pointerEvents: 'none' } }}
        data={['React', 'Angular', 'Svelte', 'Vue']}
      />
    </div>
  );
}

export const rightSection: PatternDemo = {
  type: 'demo',
  component: Demo,
};

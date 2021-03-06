import React from 'react';
import { ChevronDown } from 'tabler-icons-react';
import { NativeSelect } from '@pattern-ui/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <NativeSelect
        placeholder="Your favorite library/framework"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        rightSection={<ChevronDown size={14} />}
        rightSectionWidth={30}
      />
    </div>
  );
}

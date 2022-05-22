import React from 'react';
import { ChevronDown } from 'tabler-icons-react';
import { MultiSelect } from '@pattern-ui/core';
import { data } from './_data';

export default function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <MultiSelect
        data={data}
        placeholder="Pick all that you like"
        rightSection={<ChevronDown size={14} />}
        styles={{ rightSection: { pointerEvents: 'none' } }}
        rightSectionWidth={40}
      />
    </div>
  );
}

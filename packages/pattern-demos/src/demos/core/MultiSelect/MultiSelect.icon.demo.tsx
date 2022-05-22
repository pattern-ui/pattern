import React from 'react';
import { Hash } from 'tabler-icons-react';
import { MultiSelect } from '@pattern-ui/core';
import { data } from './_data';

export default function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <MultiSelect data={data} placeholder="Pick all that you like" icon={<Hash size={14} />} />
    </div>
  );
}

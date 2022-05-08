import React from 'react';
import { Plus } from 'tabler-icons-react';
import { BaseDemo } from './_base';

export function IconReplaceDemo() {
  return (
    <BaseDemo
      chevron={<Plus size={16} />}
      styles={{
        chevron: {
          '&[data-rotate]': {
            transform: 'rotate(45deg)',
          },
        },
      }}
    />
  );
}

export default function Demo() {
  return (
    <div style={{ maxWidth: 380, marginLeft: 'auto', marginRight: 'auto' }}>
      <IconReplaceDemo />
    </div>
  );
}

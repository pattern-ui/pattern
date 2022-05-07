import React from 'react';
import { MultiSelect } from '@pattern-ui/core';
import { data } from './_data';

export default function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <MultiSelect
        data={data}
        label="Disabled without value"
        placeholder="Won't pick anything"
        disabled
        defaultValue={[]}
      />

      <MultiSelect
        style={{ marginTop: 15 }}
        data={data}
        label="Disabled with values"
        placeholder="Won't pick anything"
        disabled
        defaultValue={['react', 'vue']}
      />
    </div>
  );
}

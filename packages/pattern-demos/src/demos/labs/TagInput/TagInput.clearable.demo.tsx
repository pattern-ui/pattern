import React from 'react';
import { TagInput } from '@pattern/labs';

export default function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <TagInput
        label="Technologies that you're interested in"
        placeholder="Add as many as you like"
        defaultValue={['react', 'next']}
        clearButtonLabel="Clear selection"
        clearable
      />
    </div>
  );
}

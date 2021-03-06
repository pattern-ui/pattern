import React from 'react';
import { EnvelopeOpenIcon } from '@modulz/radix-icons';
import { TagInput } from '@pattern-ui/labs';

export default function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <TagInput
        placeholder="Add as many as you like"
        rightSection={<EnvelopeOpenIcon />}
        m={12}
        clearable
      />
    </div>
  );
}

import React from 'react';
import { TextInput, Loader } from '@pattern/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TextInput label="Your email" placeholder="Your email" rightSection={<Loader size="xs" />} />
    </div>
  );
}

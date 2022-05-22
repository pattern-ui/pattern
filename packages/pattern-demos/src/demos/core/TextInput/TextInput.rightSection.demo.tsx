import React from 'react';
import { TextInput, Loader } from '@pattern-ui/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TextInput placeholder="Your email" rightSection={<Loader size="xs" />} />
    </div>
  );
}

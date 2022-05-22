import React from 'react';
import { Textarea } from '@pattern-ui/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Textarea placeholder="Your comment" invalid />
    </div>
  );
}

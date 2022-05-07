import React from 'react';
import { Textarea } from '@pattern/core';

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Textarea label="Your comment" placeholder="Your comment" error />

      <Textarea
        style={{ marginTop: 15 }}
        label="Your comment"
        placeholder="Your comment"
        error="Comment should not include bad words"
      />
    </div>
  );
}

export const validation: PatternDemo = {
  type: 'demo',
  component: Demo,
};

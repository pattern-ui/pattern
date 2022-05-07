import React from 'react';
import { TagInput } from '@pattern/labs';

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <TagInput
        label="Technologies that you're interested in"
        placeholder="Add as many as you like"
      />
    </div>
  );
}

export const usage: PatternDemo = {
  type: 'demo',
  component: Demo,
};

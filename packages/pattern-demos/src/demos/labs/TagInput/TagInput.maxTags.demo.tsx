import React from 'react';
import { TagInput } from '@pattern/labs';

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <TagInput
        label="Technologies that you're interested in"
        placeholder="Add up to 5"
        maxTags={5}
      />
    </div>
  );
}

export const maxTags: PatternDemo = {
  type: 'demo',
  component: Demo,
};

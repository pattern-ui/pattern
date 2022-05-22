import React from 'react';
import { TagInput } from '@pattern-ui/labs';

export default function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <TagInput placeholder="Add up to 5" maxTags={5} />
    </div>
  );
}

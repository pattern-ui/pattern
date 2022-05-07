import React, { useState } from 'react';
import { TagInput } from '@pattern/labs';

function Demo() {
  const [value, setValue] = useState(['React']);
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <TagInput
        label="Technologies that you're interested in"
        placeholder="Add as many as you like"
        clearButtonLabel="Clear selection"
        value={value}
        onChange={(item) => setValue(item)}
      />
    </div>
  );
}

export const controlable: PatternDemo = {
  type: 'demo',
  component: Demo,
};

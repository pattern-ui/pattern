import React from 'react';
import { MultiSelect } from '@pattern-ui/core';

const data = Array(50)
  .fill(0)
  .map((_, index) => `Item ${index}`);

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <MultiSelect
        data={data}
        label="MultiSelect with native scrollbars"
        placeholder="Dropdown rendered as div element"
        dropdownComponent="div"
      />
    </div>
  );
}

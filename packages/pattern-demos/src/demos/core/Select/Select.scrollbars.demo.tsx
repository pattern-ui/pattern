import React from 'react';
import { Select } from '@pattern-ui/core';

const data = Array(50)
  .fill(0)
  .map((_, index) => `Item ${index}`);

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Select
        data={data}
        label="Select with native scrollbars"
        placeholder="Dropdown with native scrollbars"
        dropdownComponent="div"
      />
    </div>
  );
}

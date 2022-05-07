import React from 'react';
import { Select } from '@pattern/core';

const code = `
import { Select } from '@pattern/core';

const data = Array(50).fill(0).map((_, index) => \`Item \${index}\`);

function Demo() {
  return (
    <Select
      data={data}
      label="Select with native scrollbars"
      placeholder="Dropdown with native scrollbars"
      dropdownComponent="div"
    />
  );
}
`;

const data = Array(50)
  .fill(0)
  .map((_, index) => `Item ${index}`);

function Demo() {
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

export const scrollbars: PatternDemo = {
  type: 'demo',
  component: Demo,
  code,
};

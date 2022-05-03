import React from 'react';
import { MultiSelect } from '@pattern/core';

const code = `
import { MultiSelect } from '@pattern/core';

const data = Array(50).fill(0).map((_, index) => \`Item \${index}\`);

function Demo() {
  return (
    <MultiSelect
      data={data}
      label="Large data set"
      placeholder="Scroll to see all options"
      maxDropdownHeight={160}
    />
  );
}
`;

const data = Array(50)
  .fill(0)
  .map((_, index) => `Item ${index}`);

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <MultiSelect
        data={data}
        label="Large data set"
        placeholder="Scroll to see all options"
        maxDropdownHeight={160}
      />
    </div>
  );
}

export const large: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

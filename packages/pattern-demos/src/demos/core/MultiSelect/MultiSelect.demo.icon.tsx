import React from 'react';
import { Hash } from 'tabler-icons-react';
import { MultiSelect } from '@pattern/core';
import { data } from './_data';

const code = `
import { MultiSelect } from '@pattern/core';
import { Hash } from 'tabler-icons-react';

function Demo() {
  return <MultiSelect icon={<Hash />} />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <MultiSelect
        data={data}
        label="Pick hashtags"
        placeholder="Pick all that you like"
        icon={<Hash size={14} />}
      />
    </div>
  );
}

export const icon: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

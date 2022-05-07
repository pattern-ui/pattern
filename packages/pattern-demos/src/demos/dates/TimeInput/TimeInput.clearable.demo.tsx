import React from 'react';
import { TimeInput } from '@pattern/dates';

const code = `
import { TimeInput } from '@pattern/dates';

function Demo() {
  return <TimeInput clearable defaultValue={new Date()} />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TimeInput label="With a clear button" clearable defaultValue={new Date()} />
    </div>
  );
}

export const clearable: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

import React from 'react';
import { TimeInput } from '@pattern/dates';

const code = `
import { TimeInput } from '@pattern/dates';

function Demo() {
  return <TimeInput disabled />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TimeInput label="Disabled without value" disabled />
      <TimeInput label="Disabled with value" disabled defaultValue={new Date()} mt="md" />
    </div>
  );
}

export const disabled: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

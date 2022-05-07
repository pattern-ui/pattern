import React from 'react';
import { TimeInput } from '@pattern/dates';

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TimeInput label="Pick time" format="12" defaultValue={new Date()} />
    </div>
  );
}

export const format: PatternDemo = {
  type: 'demo',
  component: Demo,
};

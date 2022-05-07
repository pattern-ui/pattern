import React from 'react';
import { DatePicker } from '@pattern/dates';

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker allowLevelChange={false} placeholder="No level change" label="Event date" />
    </div>
  );
}

export const noLevel: PatternDemo = {
  type: 'demo',
  component: Demo,
};

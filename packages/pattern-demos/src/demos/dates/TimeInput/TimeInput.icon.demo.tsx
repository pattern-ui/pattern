import React from 'react';
import { Clock } from 'tabler-icons-react';
import { TimeInput } from '@pattern/dates';

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TimeInput
        label="Pick time"
        placeholder="Pick time"
        icon={<Clock size={16} />}
        defaultValue={new Date()}
      />
    </div>
  );
}

export const icon: PatternDemo = {
  type: 'demo',
  component: Demo,
};

import React from 'react';
import { Clock } from 'tabler-icons-react';
import { TimeInput } from '@pattern-ui/dates';

export default function Demo() {
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

import React, { useState } from 'react';
import { Refresh } from 'tabler-icons-react';
import { ActionIcon, ColorInput } from '@pattern/core';

function Demo() {
  const [value, onChange] = useState(randomColor());
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <ColorInput
        placeholder="Pick color"
        label="Your favorite color"
        value={value}
        onChange={onChange}
        rightSection={
          <ActionIcon onClick={() => onChange(randomColor())}>
            <Refresh size={16} />
          </ActionIcon>
        }
      />
    </div>
  );
}

export const rightSection: PatternDemo = {
  type: 'demo',
  component: Demo,
};

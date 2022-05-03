import React from 'react';
import { ColorInput } from '@pattern/core';

const code = `
import { ColorInput } from '@pattern/core';

function Demo() {
  return <ColorInput disallowInput />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <ColorInput disallowInput placeholder="Pick color" label="Your favorite color" />
    </div>
  );
}

export const readOnly: PatternDemo = {
  type: 'demo',
  component: Demo,
  code,
};

import React from 'react';
import { AlertCircle } from 'tabler-icons-react';
import { Input, Tooltip } from '@pattern/core';

const code = `
import { Input, Tooltip } from '@pattern/core';
import { AlertCircle } from 'tabler-icons-react';

function Demo() {
  const rightSection = (
    <Tooltip label="We do not send spam" position="top-end">
      <AlertCircle size={16} style={{ display: 'block', opacity: 0.5 }} />
    </Tooltip>
  );

  return <Input placeholder="Your email" rightSection={rightSection} />;
}
`;

function Demo() {
  const rightSection = (
    <Tooltip label="We do not send spam" position="top-end">
      <AlertCircle size={16} style={{ display: 'block', opacity: 0.5 }} />
    </Tooltip>
  );

  return <Input placeholder="Your email" rightSection={rightSection} />;
}

export const tooltip: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

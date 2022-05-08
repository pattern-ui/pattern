import React from 'react';
import { AlertCircle } from 'tabler-icons-react';
import { Input, Tooltip } from '@pattern-ui/core';

export default function Demo() {
  const rightSection = (
    <Tooltip label="We do not send spam" position="top-end">
      <AlertCircle size={16} style={{ display: 'block', opacity: 0.5 }} />
    </Tooltip>
  );

  return <Input placeholder="Your email" rightSection={rightSection} />;
}

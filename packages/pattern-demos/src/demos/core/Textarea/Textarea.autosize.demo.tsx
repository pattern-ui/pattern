import React from 'react';
import { Textarea } from '@pattern/core';

function Demo() {
  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <Textarea
        placeholder="Autosize with no rows limit"
        label="Autosize with no rows limit"
        autosize
        minRows={2}
      />

      <Textarea
        label="Autosize with 4 rows max"
        placeholder="Autosize with 4 rows max"
        autosize
        minRows={2}
        maxRows={4}
        style={{ marginTop: 15 }}
      />
    </div>
  );
}

export const autosize: PatternDemo = {
  type: 'demo',
  component: Demo,
};

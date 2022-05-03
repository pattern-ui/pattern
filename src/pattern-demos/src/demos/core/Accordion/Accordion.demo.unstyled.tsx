import React from 'react';
import { BaseDemo } from './_base';

const code = `
import { Accordion } from '@pattern/core';

function Demo() {
  return (
    <Accordion unstyled>
      {/* ... Accordion items */}
    </Accordion>
  );
}
`;

function Demo() {
  return <BaseDemo unstyled />;
}

export const unstyled: PatternDemo = {
  type: 'demo',
  component: Demo,
  code,
};

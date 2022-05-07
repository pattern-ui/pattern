import React from 'react';
import { Code } from '@pattern-ui/core';

const codeForPreviousDemo = `import React from 'react';
import { Code } from '@pattern-ui/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}`;

export default function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}

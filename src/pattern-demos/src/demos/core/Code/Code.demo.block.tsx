import React from 'react';
import { Code } from '@pattern/core';

const code = `
import { Code } from '@pattern/core';

const codeForPreviousDemo = \`import React from 'react';
import { Code } from '@pattern/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}\`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}
`;

const codeForPreviousDemo = `import React from 'react';
import { Code } from '@pattern/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}

export const block: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};

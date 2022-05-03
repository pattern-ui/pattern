import React from 'react';
import { Blockquote, BlockquoteProps } from '@pattern/core';

function Wrapper(props: BlockquoteProps) {
  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <Blockquote {...props} />
    </div>
  );
}

const codeTemplate = (props: string, children: string) => `
import { Blockquote } from '@pattern/core';

function Demo() {
  return (
    <Blockquote${props}>
      ${children}
    </Blockquote>
  );
}
`;

export const configurator: PatternDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'color', type: 'color', initialValue: 'gray', defaultValue: 'gray' },
    { name: 'cite', type: 'string', initialValue: '– Forrest Gump' },
    {
      name: 'children',
      type: 'string',
      initialValue: 'Life is like an npm install – you never know what you are going to get.',
    },
  ],
};

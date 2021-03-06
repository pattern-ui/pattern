import React from 'react';
import { Text, Space } from '@pattern-ui/core';

function Wrapper(props: any) {
  return (
    <>
      <Text>First line</Text>
      <Space {...props} />
      <Text>Second line</Text>
    </>
  );
}

const codeTemplate = (props: string) => `
import { Text, Space } from '@pattern-ui/core';

export default function Demo() {
  return (
    <>
      <Text>First line</Text>
      <Space${props} />
      <Text>Second line</Text>
    </>
  );
}
`;

export const horizontal: PatternControlDemo = {
  type: 'control',
  component: Wrapper,
  codeTemplate,
  controls: [{ name: 'h', type: 'size', initialValue: 'md', defaultValue: 0 }],
};

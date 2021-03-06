import React from 'react';
import { Text, Space } from '@pattern-ui/core';

function Wrapper(props: any) {
  return (
    <div style={{ display: 'flex' }}>
      <Text>First part</Text>
      <Space {...props} />
      <Text>Second part</Text>
    </div>
  );
}

const codeTemplate = (props: string) => `
import { Text, Space } from '@pattern-ui/core';

export default function Demo() {
  return (
    <div style={{ display: 'flex' }}>
      <Text>First line</Text>
      <Space${props} />
      <Text>Second line</Text>
    </div>
  );
}
`;

export const vertical: PatternControlDemo = {
  type: 'control',
  component: Wrapper,
  codeTemplate,
  controls: [{ name: 'w', type: 'size', initialValue: 'md', defaultValue: 0 }],
};

import React from 'react';
import { Mark, MarkProps, Text } from '@pattern/core';

function Wrapper(props: MarkProps) {
  return (
    <Text>
      Highlight <Mark {...props}>this chunk</Mark> of the text
    </Text>
  );
}

const codeTemplate = (props: string) => `
import { Text, Mark } from '@pattern/core';

export default function Demo() {
  return (
    <Text>
      Highlight <Mark${props}>this chunk</Mark> of the text
    </Text>
  );
}
`;

export const control: PatternControlDemo = {
  type: 'control',
  component: Wrapper,
  codeTemplate,
  controls: [{ name: 'color', type: 'color', initialValue: 'yellow', defaultValue: 'yellow' }],
};

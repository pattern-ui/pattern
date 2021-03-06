import React from 'react';
import { ColorInput, ColorInputProps } from '@pattern-ui/core';

function Wrapper(props: ColorInputProps) {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <ColorInput placeholder={props.format} defaultValue="#C5D899" {...props} />
    </div>
  );
}

const codeTemplate = (props: string) => `
import { ColorInput } from '@pattern-ui/core';

export default function Demo() {
  return <ColorInput defaultValue="#C5D899"${props} />;
}
`;

export const formatsControl: PatternControlDemo = {
  type: 'control',
  component: Wrapper,
  codeTemplate,
  controls: [
    {
      name: 'format',
      type: 'select',
      initialValue: 'hex',
      defaultValue: 'hex',
      data: [
        { value: 'hex', label: 'HEX' },
        { value: 'rgb', label: 'RGB' },
        { value: 'rgba', label: 'RGBA' },
        { value: 'hsl', label: 'HSL' },
        { value: 'hsla', label: 'HSLA' },
      ],
    },
  ],
};

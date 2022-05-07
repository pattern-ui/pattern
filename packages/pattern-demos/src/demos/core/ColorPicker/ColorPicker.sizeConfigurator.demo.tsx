import React from 'react';
import { DEFAULT_THEME, ColorPicker, ColorPickerProps } from '@pattern/core';

function Wrapper(props: ColorPickerProps) {
  return (
    <ColorPicker
      style={{ margin: 'auto' }}
      format="rgba"
      defaultValue="rgba(50, 151, 194, 1)"
      swatches={Object.keys(DEFAULT_THEME.colors).map((color) => DEFAULT_THEME.colors[color][6])}
      {...props}
    />
  );
}

const codeTemplate = (props: string) => `
import { ColorPicker } from '@pattern/core';

export default function Demo() {
  return <ColorPicker${props} />;
}
`;

export const sizeConfigurator: PatternDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [{ name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' }],
};

import React, { useState } from 'react';
import { Text, DEFAULT_THEME, AlphaSlider, AlphaSliderProps } from '@pattern-ui/core';

function Wrapper(props: AlphaSliderProps) {
  const [value, onChange] = useState(1);
  return (
    <div style={{ maxWidth: 300, marginLeft: 'auto', marginRight: 'auto' }}>
      <Text mb="xs" ml={-6}>
        Alpha value: {value}
      </Text>
      <AlphaSlider
        style={{ margin: 'auto' }}
        color={DEFAULT_THEME.colors.blue[7]}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}

const codeTemplate = (props: string) => `import { useState } from 'react';
import { AlphaSlider, Text } from '@pattern-ui/core';

export default function Demo() {
  const [value, onChange] = useState(1);

  return (
    <>
      <Text>Alpha value: {value}</Text>
      <AlphaSlider color="${DEFAULT_THEME.colors.blue[7]}" value={value} onChange={onChange}${props} />
    </>
  );
}`;

export const alphaControl: PatternControlDemo = {
  type: 'control',
  component: Wrapper,
  codeTemplate,
  controls: [{ name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' }],
};

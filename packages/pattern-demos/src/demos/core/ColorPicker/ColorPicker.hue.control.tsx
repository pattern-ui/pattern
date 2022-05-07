import React, { useState } from 'react';
import { DEFAULT_THEME, Text, HueSlider, HueSliderProps } from '@pattern-ui/core';

function Wrapper(props: HueSliderProps) {
  const [value, onChange] = useState(250);
  return (
    <div style={{ maxWidth: 300, marginLeft: 'auto', marginRight: 'auto' }}>
      <Text mb="xs" ml={-6}>
        Hue value: {value}
      </Text>
      <HueSlider
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
import { HueSlider, Text } from '@pattern-ui/core';

export default function Demo() {
  const [value, onChange] = useState(250);

  return (
    <>
      <Text>Hue value: {value}</Text>
      <HueSlider value={value} onChange={onChange}${props} />
    </>
  );
}`;

export const hueControl: PatternControlDemo = {
  type: 'control',
  component: Wrapper,
  codeTemplate,
  controls: [{ name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' }],
};

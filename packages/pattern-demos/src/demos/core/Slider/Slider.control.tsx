import React from 'react';
import { Slider, RangeSlider } from '@pattern-ui/core';

function Wrapper(props: any) {
  const Component = props.type === 'range' ? RangeSlider : Slider;

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <Component
        defaultValue={40}
        marks={[
          { value: 20, label: '20%' },
          { value: 50, label: '50%' },
          { value: 80, label: '80%' },
        ]}
        {...props}
      />
    </div>
  );
}

const codeTemplate = (props: string) => `
import { ${props.includes('range') ? 'RangeSlider' : 'Slider'} } from '@pattern-ui/core';

export default function Demo() {
  return (
    <${props.includes('range') ? 'RangeSlider' : 'Slider'}${
  props ? `\n      ${props.replace('type="range"', '').trim()}` : '' // please don't judge, this works somehow
}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
  );
}
`;

export const control: PatternControlDemo = {
  type: 'control',
  component: Wrapper,
  codeTemplate,
  demoProps: { multiline: 3 },
  controls: [
    {
      name: 'type',
      type: 'segmented',
      initialValue: 'slider',
      defaultValue: 'slider',
      data: [
        { label: 'Default', value: 'slider' },
        { label: 'Range', value: 'range' },
      ],
    },
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'radius', type: 'size', initialValue: 'xs', defaultValue: 'xs' },
    { name: 'showLabelOnHover', type: 'boolean', initialValue: true, defaultValue: true },
    { name: 'labelAlwaysOn', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};

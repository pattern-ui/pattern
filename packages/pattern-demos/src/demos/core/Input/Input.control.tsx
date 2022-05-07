import React from 'react';
import { At } from 'tabler-icons-react';
import { Input, InputProps } from '@pattern-ui/core';

const iconSizes = {
  xs: 14,
  sm: 16,
  md: 18,
  lg: 22,
  xl: 24,
};

function Wrapper(props: InputProps<'input'>) {
  return <Input icon={<At size={iconSizes[props.size]} />} {...props} />;
}

const codeTemplate = (props: string) => `
import { Input } from '@pattern-ui/core';
import { At } from 'tabler-icons-react';

export default function Demo() {
  return (
    <Input
      icon={<At />}
     ${props}
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
      name: 'variant',
      type: 'segmented',
      data: [
        { label: 'default', value: 'default' },
        { label: 'filled', value: 'filled' },
        { label: 'unstyled', value: 'unstyled' },
      ],
      initialValue: 'default',
      defaultValue: 'default',
    },
    { name: 'placeholder', type: 'string', initialValue: 'Your email' },
    { name: 'radius', type: 'size', initialValue: 'xs', defaultValue: 'xs' },
    { name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'invalid', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};

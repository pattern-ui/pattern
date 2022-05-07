import React from 'react';
import { Photo } from 'tabler-icons-react';
import { ThemeIcon, ThemeIconProps } from '@pattern-ui/core';

const iconSizes = {
  xs: 10,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
};

function Wrapper(props: ThemeIconProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <ThemeIcon {...props}>
        <Photo size={iconSizes[props.size]} />
      </ThemeIcon>
    </div>
  );
}

const codeTemplate = (props: string) => `
import { ThemeIcon } from '@pattern-ui/core';
import { Photo } from 'tabler-icons-react';

export default function Demo() {
  return (
    <ThemeIcon${props}>
      <Photo />
    </ThemeIcon>
  );
}
`;

export const control: PatternControlDemo = {
  type: 'control',
  component: Wrapper,
  codeTemplate,
  controls: [
    {
      name: 'variant',
      type: 'segmented',
      initialValue: 'filled',
      defaultValue: 'filled',
      data: [
        { label: 'filled', value: 'filled' },
        { label: 'light', value: 'light' },
        { label: 'outline', value: 'outline' },
      ],
    },
    { name: 'radius', type: 'size', initialValue: 'xs', defaultValue: 'xs' },
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
  ],
};

import React from 'react';
import { Adjustments } from 'tabler-icons-react';
import { ActionIcon, ActionIconProps, Group } from '@pattern-ui/core';

const iconSizes = {
  xs: 12,
  sm: 14,
  md: 18,
  lg: 26,
  xl: 34,
};

function Wrapper(props: ActionIconProps<'button'>) {
  return (
    <Group position="center">
      <ActionIcon {...props}>
        <Adjustments size={iconSizes[props.size]} />
      </ActionIcon>
    </Group>
  );
}

const codeTemplate = (props: string) => `
import { ActionIcon } from '@pattern-ui/core';
import { Adjustments } from 'tabler-icons-react';

export default function Demo() {
  return (
    <ActionIcon${props}>
      <Adjustments />
    </ActionIcon>
  );
}
`;

export const control: PatternControlDemo = {
  type: 'control',
  component: Wrapper,
  codeTemplate,
  controls: [
    { name: 'color', type: 'color', initialValue: 'gray', defaultValue: 'gray' },
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'radius', type: 'size', initialValue: 'xs', defaultValue: 'xs' },
    {
      name: 'variant',
      type: 'select',
      data: [
        { label: 'transparent', value: 'transparent' },
        { label: 'hover', value: 'hover' },
        { label: 'filled', value: 'filled' },
        { label: 'light', value: 'light' },
        { label: 'outline', value: 'outline' },
        { label: 'default', value: 'default' },
      ],
      initialValue: 'hover',
      defaultValue: 'hover',
    },
    { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'loading', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};

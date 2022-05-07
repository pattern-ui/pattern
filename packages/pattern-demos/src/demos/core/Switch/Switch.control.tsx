import React from 'react';
import { Switch, SwitchProps } from '@pattern/core';

const codeTemplate = (props: string) => `
import { Switch } from '@pattern/core';

export default function Demo() {
  return (
    <Switch
     ${props}
    />
  );
}
`;

export const control: PatternControlDemo = {
  type: 'control',
  component: (props: SwitchProps) => <Switch {...props} defaultChecked />,
  codeTemplate,
  demoProps: { multiline: 3 },
  controls: [
    {
      name: 'label',
      type: 'string',
      initialValue: 'I agree to sell my privacy',
    },
    { name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'radius', type: 'size', initialValue: 'xl', defaultValue: 'xl' },
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};

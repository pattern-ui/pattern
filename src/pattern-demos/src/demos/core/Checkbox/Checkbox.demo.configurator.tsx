import React from 'react';
import { Checkbox, CheckboxProps } from '@pattern/core';

const codeTemplate = (props: string) => `
import { Checkbox } from '@pattern/core';

function Demo() {
  return (
    <Checkbox
     ${props}
    />
  );
}
`;

export const configurator: PatternDemo = {
  type: 'configurator',
  component: (props: CheckboxProps) => <Checkbox {...props} defaultChecked />,
  codeTemplate,
  configuratorProps: {
    multiline: 3,
  },
  configurator: [
    {
      name: 'label',
      type: 'string',
      initialValue: 'I agree to sell my privacy',
    },
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'radius', type: 'size', initialValue: 'xs', defaultValue: 'xs' },
    { name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'indeterminate', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};

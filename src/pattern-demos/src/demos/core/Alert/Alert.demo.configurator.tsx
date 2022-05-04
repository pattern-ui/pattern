import React from 'react';
import { AlertCircle } from 'tabler-icons-react';
import { Alert } from '@pattern/core';

function Wrapper(props: React.ComponentPropsWithoutRef<typeof Alert>) {
  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <Alert {...props} icon={<AlertCircle size={16} />} />
    </div>
  );
}

const codeTemplate = (props: string, children: string) => `
import { Alert } from '@pattern/core';
import { AlertCircle } from 'tabler-icons-react';

function Demo() {
  return (
    <Alert icon={<AlertCircle size={16} />}${props}>
      ${children}
    </Alert>
  );
}
`;

export const configurator: PatternDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'title', type: 'string', initialValue: 'Bummer!' },
    {
      name: 'children',
      type: 'string',
      initialValue:
        'Something terrible happened! You made a mistake and there is no going back, your data was lost forever!',
    },
    { name: 'color', type: 'color', initialValue: 'red', defaultValue: 'blue' },
    { name: 'radius', type: 'size', initialValue: 'xs', defaultValue: 'xs' },
    { name: 'withCloseButton', type: 'boolean', initialValue: false, defaultValue: false },
    {
      name: 'variant',
      type: 'segmented',
      data: [
        { label: 'light', value: 'light' },
        { label: 'filled', value: 'filled' },
        { label: 'outline', value: 'outline' },
      ],
      initialValue: 'light',
      defaultValue: 'light',
    },
  ],
};

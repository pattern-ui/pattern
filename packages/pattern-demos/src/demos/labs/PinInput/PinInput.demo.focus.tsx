import { PinInput } from '@pattern/labs';

const codeTemplate = (props: string) => `<PasswordInput
 ${props}
/>`;

export const focus: PatternDemo = {
  type: 'configurator',
  component: PinInput,
  codeTemplate,
  configuratorProps: { multiline: true },
  configurator: [{ name: 'manageFocus', type: 'boolean', initialValue: true }],
};

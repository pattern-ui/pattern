import { PinInput } from '@pattern-ui/labs';

const codeTemplate = (props: string) => `<PasswordInput
 ${props}
/>`;

export const focus: PatternControlDemo = {
  type: 'control',
  component: PinInput,
  codeTemplate,
  demoProps: { multiline: true },
  controls: [{ name: 'manageFocus', type: 'boolean', initialValue: true }],
};

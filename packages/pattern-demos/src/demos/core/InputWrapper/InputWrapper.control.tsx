import React from 'react';
import { InputWrapper, InputWrapperProps, Input } from '@pattern-ui/core';

function Wrapper(props: InputWrapperProps) {
  return (
    <div style={{ maxWidth: 440, marginLeft: 'auto', marginRight: 'auto' }}>
      <InputWrapper id="input-demo" {...props}>
        <Input id="input-demo" placeholder="Your email" size={props.size} />
      </InputWrapper>
    </div>
  );
}

const codeTemplate = (props: string) => `
import { InputWrapper, Input } from '@pattern-ui/core';

export default function Demo() {
  return (
    <InputWrapper
      id="input-demo"
     ${props}
    >
      <Input id="input-demo" placeholder="Your email" />
    </InputWrapper>
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
      name: 'required',
      type: 'boolean',
      initialValue: true,
      defaultValue: false,
    },
    {
      name: 'label',
      type: 'string',
      initialValue: 'Credit card information',
    },
    {
      name: 'description',
      type: 'string',
      initialValue: 'Please enter your credit card information, we need some money',
    },
    {
      name: 'error',
      type: 'string',
      initialValue: 'Your credit card expired',
    },
    {
      name: 'size',
      type: 'size',
      initialValue: 'sm',
      defaultValue: 'sm',
    },
  ],
};

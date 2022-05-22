import React from 'react';
import { checkAccessibility, itSupportsSystemProps, itSupportsInputProps } from '@pattern-ui/tests';
import { InputWrapper } from '@pattern-ui/input-wrapper';
import { ColorInput, ColorInputProps } from './ColorInput';

const defaultProps: ColorInputProps = {};

describe('@pattern-ui/core/ColorInput', () => {
  checkAccessibility([
    <InputWrapper id="test" label="Color Label">
      <ColorInput id="test" />
    </InputWrapper>,
    <InputWrapper id="test2" label="Color Label">
      <ColorInput aria-label="Color input" id="test1" />
    </InputWrapper>,
  ]);
  itSupportsInputProps(ColorInput, defaultProps, 'ColorInput');
  itSupportsSystemProps({
    component: ColorInput,
    props: defaultProps,
    displayName: '@pattern-ui/core/ColorInput',
    refType: HTMLInputElement,
    excludeOthers: true,
  });
});

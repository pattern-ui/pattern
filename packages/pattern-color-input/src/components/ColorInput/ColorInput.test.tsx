import React from 'react';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsWrapperProps,
  itSupportsInputProps,
} from '@pattern-ui/tests';
import { ColorInput, ColorInputProps } from './ColorInput';

const defaultProps: ColorInputProps = {
  label: 'test-label',
};

describe('@pattern-ui/core/ColorInput', () => {
  checkAccessibility([<ColorInput label="Color input" />, <ColorInput aria-label="Color input" />]);
  itSupportsWrapperProps(ColorInput, defaultProps);
  itSupportsInputProps(ColorInput, defaultProps, 'ColorInput');
  itSupportsSystemProps({
    component: ColorInput,
    props: defaultProps,
    displayName: '@pattern-ui/core/ColorInput',
    refType: HTMLInputElement,
    excludeOthers: true,
  });
});

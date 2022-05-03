import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  checkAccessibility,
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsWrapperProps,
  itSupportsInputIcon,
  itSupportsInputRightSection,
} from '@pattern/tests';
import { Input, InputProps } from './Input';

const defaultProps: InputProps<'input'> = {};

describe('@pattern/core/Input', () => {
  itIsPolymorphic(Input, defaultProps, '.pattern-Input-input');
  itSupportsWrapperProps(Input, defaultProps);
  itSupportsInputIcon(Input, defaultProps);
  itSupportsInputRightSection(Input, defaultProps);
  checkAccessibility([
    <Input aria-label="test-input" />,
    <Input placeholder="test-input" />,
    <Input placeholder="test-input" invalid />,
  ]);

  itSupportsSystemProps({
    component: Input,
    props: defaultProps,
    displayName: '@pattern/core/Input',
    refType: HTMLInputElement,
    excludeOthers: true,
  });

  it('handles disabled state', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });
});

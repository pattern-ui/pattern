import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  checkAccessibility,
  itSupportsFocusEvents,
  itSupportsSystemProps,
  itSupportsInputIcon,
} from '@pattern-ui/tests';
import { InputWrapper } from '@pattern-ui/input-wrapper';
import { PasswordInput, PasswordInputProps } from './PasswordInput';

const defaultProps: PasswordInputProps = {};

describe('@pattern-ui/core/PasswordInput', () => {
  itSupportsFocusEvents(PasswordInput, defaultProps, 'input');
  itSupportsInputIcon(PasswordInput, defaultProps);
  checkAccessibility([
    <InputWrapper label="test-label" id="test">
      <PasswordInput id="test" />
    </InputWrapper>,
  ]);

  itSupportsSystemProps({
    component: PasswordInput,
    props: defaultProps,
    displayName: '@pattern-ui/core/PasswordInput',
    excludeOthers: true,
    refType: HTMLInputElement,
  });

  it('sets required on input', () => {
    const { container } = render(<PasswordInput required />);
    expect(container.querySelector('input')).toHaveAttribute('required');
  });

  it('sets input type based on password visibility state', () => {
    const { container } = render(<PasswordInput />);
    expect(container.querySelector('input')).toHaveAttribute('type', 'password');
    userEvent.click(screen.getByRole('button', { hidden: true }));
    expect(container.querySelector('input')).toHaveAttribute('type', 'text');
  });

  it('sets toggle button tabIndex based on toggleTabIndex prop', () => {
    const { container: focusable } = render(<PasswordInput toggleTabIndex={0} />);
    const { container: notFocusable } = render(<PasswordInput toggleTabIndex={-1} />);
    expect(focusable.querySelector('button')).toHaveAttribute('tabindex', '0');
    expect(notFocusable.querySelector('button')).toHaveAttribute('tabindex', '-1');
  });
});

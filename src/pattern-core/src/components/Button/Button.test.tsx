import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  checkAccessibility,
  itRendersChildren,
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsFocusEvents,
} from '@pattern/tests';
import { Button, ButtonProps } from './Button';

const defaultProps: ButtonProps<'button'> = {};

describe('@pattern/core/Button', () => {
  checkAccessibility([<Button>Pattern button</Button>]);
  itRendersChildren(Button, defaultProps);
  itIsPolymorphic(Button, defaultProps);
  itSupportsFocusEvents(Button, defaultProps, 'button');
  itSupportsSystemProps({
    component: Button,
    props: defaultProps,
    displayName: '@pattern/core/Button',
    refType: HTMLButtonElement,
  });

  it('passes type to button component', () => {
    render(<Button type="submit" />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('renders left and right icons if they are provided', () => {
    render(<Button rightIcon="right-icon" leftIcon="left-icon" />);
    expect(screen.getByText('right-icon')).toBeInTheDocument();
    expect(screen.getByText('left-icon')).toBeInTheDocument();
  });

  it('sets disabled attribute based on prop', () => {
    render(<Button disabled />);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});

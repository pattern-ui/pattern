import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  checkAccessibility,
  itSupportsFocusEvents,
  itSupportsSystemProps,
  itSupportsInputProps,
} from '@pattern-ui/tests';
import { InputWrapper } from '@pattern-ui/input-wrapper';
import { Textarea, TextareaProps } from './Textarea';

const defaultProps: TextareaProps = {};

describe('@pattern-ui/core/Textarea', () => {
  checkAccessibility([
    <InputWrapper label="test-label" id="test">
      <Textarea id="test" />
    </InputWrapper>,
  ]);
  itSupportsFocusEvents(Textarea, defaultProps, 'textarea');
  itSupportsInputProps(Textarea, defaultProps, 'Textarea');
  itSupportsSystemProps({
    component: Textarea,
    props: defaultProps,
    displayName: '@pattern-ui/core/Textarea',
    refType: HTMLTextAreaElement,
    excludeOthers: true,
  });

  it('supports uncontrolled state', () => {
    render(<Textarea {...defaultProps} />);
    expect(screen.getByRole('textbox')).toHaveValue('');
    userEvent.type(screen.getByRole('textbox'), 'test-value');
    expect(screen.getByRole('textbox')).toHaveValue('test-value');
  });

  it('supports controlled state', () => {
    const spy = jest.fn();
    render(<Textarea {...defaultProps} value="" onChange={spy} />);
    expect(screen.getByRole('textbox')).toHaveValue('');
    userEvent.type(screen.getByRole('textbox'), 'test-value');
    expect(spy).toHaveBeenCalled();
    expect(screen.getByRole('textbox')).toHaveValue('');
  });
});

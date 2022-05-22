import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsInputProps,
  itSupportsFocusEvents,
} from '@pattern-ui/tests';
import { InputWrapper } from '@pattern-ui/input-wrapper';
import { DatePicker, DatePickerProps } from './DatePicker';

const defaultProps: DatePickerProps = {};

describe('@pattern-ui/dates/DatePicker', () => {
  checkAccessibility([
    <InputWrapper label="date picker" id="test">
      <DatePicker id="test" />
    </InputWrapper>,
  ]);
  itSupportsInputProps(DatePicker, defaultProps, 'DatePicker');
  itSupportsFocusEvents(DatePicker, defaultProps, 'input');
  itSupportsSystemProps({
    component: DatePicker,
    props: defaultProps,
    displayName: '@pattern-ui/dates/DatePicker',
    refType: HTMLInputElement,
    excludeOthers: true,
  });

  it('sets label on DatePickerBase based on inputFormat prop', () => {
    render(<DatePicker value={new Date(2021, 6, 13)} inputFormat="MM/YY" />);
    expect(screen.getByRole('textbox')).toHaveValue('07/21');
  });
});

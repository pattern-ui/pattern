import React from 'react';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsInputRightSection,
  itSupportsInputIcon,
  itSupportsFocusEvents,
} from '@pattern-ui/tests';
import { InputWrapper } from '@pattern-ui/input-wrapper';
import { TimeRangeInput, TimeRangeInputProps } from './TimeRangeInput';

const defaultProps: TimeRangeInputProps = {
  hoursLabel: 'test-hours',
  minutesLabel: 'test-minutes',
  secondsLabel: 'test-seconds',
};

describe('@pattern-ui/dates/TimeRangeInput', () => {
  checkAccessibility([
    <InputWrapper label="test-label" id="test">
      <TimeRangeInput {...defaultProps} id="test" />
    </InputWrapper>,
    <InputWrapper label="test-label" id="test2">
      <TimeRangeInput {...defaultProps} withSeconds id="test2" />
    </InputWrapper>,
  ]);
  itSupportsInputRightSection(TimeRangeInput, defaultProps);
  itSupportsInputIcon(TimeRangeInput, defaultProps);
  itSupportsFocusEvents(TimeRangeInput, defaultProps, 'input');
  itSupportsSystemProps({
    component: TimeRangeInput,
    props: defaultProps,
    displayName: '@pattern-ui/dates/TimeRangeInput',
    refType: HTMLInputElement,
    excludeOthers: true,
  });
});

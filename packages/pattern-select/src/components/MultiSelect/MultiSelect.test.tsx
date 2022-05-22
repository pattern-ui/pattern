import React from 'react';
import {
  itSupportsSystemProps,
  checkAccessibility,
  itSupportsInputIcon,
  itSupportsInputRightSection,
  itSupportsWrapperProps,
  itSupportsFocusEvents,
} from '@pattern-ui/tests';
import { InputWrapper } from '@pattern-ui/input-wrapper';
import { MultiSelect, MultiSelectProps } from './MultiSelect';

const defaultProps: MultiSelectProps = {
  withinPortal: false,
  transitionDuration: 0,
  data: ['React', 'Angular', 'Svelte', 'Vue'],
  defaultValue: ['React', 'Angular'],
  id: 'test-multi-select',
};

describe('@pattern-ui/core/MultiSelect', () => {
  checkAccessibility([
    <InputWrapper id="test" label="Test">
      <MultiSelect {...defaultProps} initiallyOpened id="test" />
    </InputWrapper>,
  ]);
  itSupportsFocusEvents(MultiSelect, defaultProps, '#test-multi-select');
  itSupportsInputIcon(MultiSelect, defaultProps);
  itSupportsInputRightSection(MultiSelect, defaultProps);
  itSupportsWrapperProps(MultiSelect, defaultProps);
  itSupportsSystemProps({
    component: MultiSelect,
    props: defaultProps,
    displayName: '@pattern-ui/core/MultiSelect',
    refType: HTMLInputElement,
    excludeOthers: true,
  });
});

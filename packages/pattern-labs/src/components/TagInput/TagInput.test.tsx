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
import { TagInput, TagInputProps } from './TagInput';

const defaultProps: TagInputProps = {
  defaultValue: ['react', 'ng'],
  placeholder: 'Input Tag',
  id: 'test-tag-input',
};

describe('@pattern-ui/labs/TagInput', () => {
  checkAccessibility([
    <InputWrapper label="test-label" id="test">
      <TagInput {...defaultProps} id="test" />
    </InputWrapper>,
  ]);
  itSupportsFocusEvents(TagInput, defaultProps, '#test-tag-input');
  itSupportsInputIcon(TagInput, defaultProps);
  itSupportsInputRightSection(TagInput, defaultProps);
  itSupportsWrapperProps(TagInput, defaultProps);
  itSupportsSystemProps({
    component: TagInput,
    props: defaultProps,
    displayName: '@pattern-ui/labs/TagInput',
    refType: HTMLInputElement,
    excludeOthers: true,
  });
});

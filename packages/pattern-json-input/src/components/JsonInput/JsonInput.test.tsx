import React from 'react';
import {
  itSupportsSystemProps,
  itSupportsInputProps,
  itSupportsFocusEvents,
  checkAccessibility,
} from '@pattern-ui/tests';
import { InputWrapper } from '@pattern-ui/input-wrapper';
import { JsonInput, JsonInputProps } from './JsonInput';

const defaultProps: JsonInputProps = {};

describe('@pattern-ui/core/JsonInput', () => {
  checkAccessibility([
    <InputWrapper label="test-label" id="test">
      <JsonInput {...defaultProps} id="test" />
    </InputWrapper>,
  ]);
  itSupportsFocusEvents(JsonInput, defaultProps, 'textarea');
  itSupportsInputProps(JsonInput, defaultProps, 'JsonInput');
  itSupportsSystemProps({
    component: JsonInput,
    props: defaultProps,
    displayName: '@pattern-ui/core/JsonInput',
    refType: HTMLTextAreaElement,
    excludeOthers: true,
  });
});

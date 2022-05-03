import React from 'react';
import {
  itSupportsSystemProps,
  itSupportsInputProps,
  itSupportsFocusEvents,
  checkAccessibility,
} from '@pattern/tests';
import { JsonInput, JsonInputProps } from './JsonInput';

const defaultProps: JsonInputProps = {
  label: 'test-label',
};

describe('@pattern/core/JsonInput', () => {
  checkAccessibility([<JsonInput {...defaultProps} />]);
  itSupportsFocusEvents(JsonInput, defaultProps, 'textarea');
  itSupportsInputProps(JsonInput, defaultProps, 'JsonInput');
  itSupportsSystemProps({
    component: JsonInput,
    props: defaultProps,
    displayName: '@pattern/core/JsonInput',
    refType: HTMLTextAreaElement,
    excludeOthers: true,
  });
});

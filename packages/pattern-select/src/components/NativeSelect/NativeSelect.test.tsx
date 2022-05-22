import React from 'react';
import { render } from '@testing-library/react';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsInputProps,
  itSupportsFocusEvents,
} from '@pattern-ui/tests';
import { InputWrapper } from '@pattern-ui/input-wrapper';
import { NativeSelect, NativeSelectProps } from './NativeSelect';

const defaultProps: NativeSelectProps = {
  data: ['test-item-1', 'test-item-2', 'test-item-3'],
};

describe('@pattern-ui/core/NativeSelect', () => {
  checkAccessibility([
    <InputWrapper label="test-label" id="test">
      <NativeSelect {...defaultProps} id="test" />
    </InputWrapper>,
    <InputWrapper id="test2" label="test-label">
      <NativeSelect {...defaultProps} aria-label="test-label" id="test2" />
    </InputWrapper>,
  ]);
  itSupportsInputProps(NativeSelect, defaultProps, 'NativeSelect');
  itSupportsFocusEvents(NativeSelect, defaultProps, 'select');
  itSupportsSystemProps({
    component: NativeSelect,
    props: defaultProps,
    displayName: '@pattern-ui/core/NativeSelect',
    excludeOthers: true,
    refType: HTMLSelectElement,
  });

  it('renders correct amount of options', () => {
    const { container: withoutPlaceholder } = render(<NativeSelect {...defaultProps} />);
    const { container: withPlaceholder } = render(
      <NativeSelect {...defaultProps} placeholder="$" />
    );
    expect(withoutPlaceholder.querySelectorAll('option')).toHaveLength(defaultProps.data.length);
    expect(withPlaceholder.querySelectorAll('option')).toHaveLength(defaultProps.data.length + 1);
  });
});

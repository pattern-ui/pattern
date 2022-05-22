import React from 'react';
import {
  itSupportsSystemProps,
  checkAccessibility,
  itSupportsFocusEvents,
  renderWithAct,
  itSupportsInputProps,
} from '@pattern-ui/tests';
import { InputWrapper } from '@pattern-ui/input-wrapper';
import { Autocomplete, AutocompleteProps } from './Autocomplete';

const defaultProps: AutocompleteProps = {
  withinPortal: false,
  initiallyOpened: true,
  data: [{ value: 'test-1' }, { value: 'test-2' }],
  transitionDuration: 0,
};

const largeDataSet: AutocompleteProps['data'] = Array(50)
  .fill(0)
  .map((_, index) => ({ value: index.toString() }));

const queries = {
  getDropdown: (container: HTMLElement) =>
    container.querySelector('.pattern-Autocomplete-dropdown'),
  getItems: (container: HTMLElement) => container.querySelectorAll('.pattern-Autocomplete-item'),
};

describe('@pattern-ui/core/Autocomplete', () => {
  checkAccessibility([
    <InputWrapper label="Test" id="test">
      <Autocomplete {...defaultProps} id="test" />
    </InputWrapper>,
  ]);
  itSupportsInputProps(Autocomplete, defaultProps, 'Autocomplete');
  itSupportsFocusEvents(Autocomplete, defaultProps, '.pattern-Autocomplete-input');
  itSupportsSystemProps({
    component: Autocomplete,
    props: defaultProps,
    displayName: '@pattern-ui/core/Autocomplete',
    refType: HTMLInputElement,
    excludeOthers: true,
  });

  it('renders dropdown when value has both full match and partial match', async () => {
    const { container } = await renderWithAct(
      <Autocomplete {...defaultProps} data={[{ value: 'AAA' }, { value: 'AA' }]} value="AA" />
    );

    expect(queries.getDropdown(container)).toBeInTheDocument();
  });

  it('renders correct amount of items based on data prop', async () => {
    const { container } = await renderWithAct(
      <Autocomplete {...defaultProps} data={largeDataSet.slice(0, 5)} limit={10} />
    );

    expect(queries.getItems(container)).toHaveLength(5);
  });

  it('renders correct amount of items based on filter prop', async () => {
    const { container } = await renderWithAct(
      <Autocomplete
        {...defaultProps}
        data={largeDataSet}
        limit={10}
        filter={(_query, item) => item.value.includes('2')}
      />
    );

    // Numbers 0-50 which include 2, e.g. 12, 22, 42
    expect(queries.getItems(container)).toHaveLength(10);
  });

  it('limits amount of shown items based on limit prop', async () => {
    const { container } = await renderWithAct(
      <Autocomplete {...defaultProps} data={largeDataSet} initiallyOpened limit={10} />
    );
    expect(queries.getItems(container)).toHaveLength(10);
  });
});

import React, { forwardRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DefaultItem } from '../DefaultItem/DefaultItem';
import { SelectItems, SelectItemsProps } from './SelectItems';

const data = [
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
];

const defaultProps: SelectItemsProps = {
  data,
  hovered: -1,
  __staticSelector: 'Select',
  isItemSelected: () => false,
  uuid: 'test-id',
  itemsRefs: { current: {} } as any,
  onItemHover: () => {},
  onItemSelect: () => {},
  size: 'sm' as const,
  itemComponent: DefaultItem,
  nothingFound: 'test-nothing',
};

describe('@pattern-ui/core/Select/SelectItems', () => {
  it('renders nothing found message if data array is empty', () => {
    const { container: withData } = render(<SelectItems {...defaultProps} data={data} />);
    const { container: withoutData } = render(
      <SelectItems {...defaultProps} data={[]} nothingFound="test-nothing" />
    );

    expect(withData.querySelectorAll('.pattern-Select-nothingFound')).toHaveLength(0);
    expect(withoutData.querySelector('.pattern-Select-nothingFound').textContent).toBe(
      'test-nothing'
    );
  });

  it('renders correct default items', () => {
    render(<SelectItems {...defaultProps} />);
    expect(screen.getAllByRole('option')).toHaveLength(defaultProps.data.length);
  });

  it('renders correct custom items', () => {
    const { container } = render(
      <SelectItems
        {...defaultProps}
        itemComponent={forwardRef((props: any, ref) => (
          <span data-item ref={ref} {...props} />
        ))}
      />
    );
    expect(screen.getAllByRole('option')).toHaveLength(defaultProps.data.length);
    expect(container.querySelectorAll('[data-item]')).toHaveLength(defaultProps.data.length);
  });

  it('calls onItemSelect with mouse down event on item', () => {
    const spy = jest.fn();
    render(<SelectItems {...defaultProps} onItemSelect={spy} />);
    userEvent.click(screen.getAllByRole('option')[2]);
    expect(spy).toHaveBeenCalledWith(defaultProps.data[2]);
  });

  it('calls onItemHover when mouse enters item', () => {
    const spy = jest.fn();
    render(<SelectItems {...defaultProps} onItemHover={spy} />);
    userEvent.hover(screen.getAllByRole('option')[2]);
    expect(spy).toHaveBeenCalledWith(2);
  });

  it('registers refs of all items', () => {
    const refs = { current: {} } as any;
    render(<SelectItems {...defaultProps} itemsRefs={refs} />);
    expect(Object.keys(refs.current)).toHaveLength(defaultProps.data.length);
    expect(
      Object.keys(refs.current).every((ref) => refs.current[ref] instanceof HTMLDivElement)
    ).toBe(true);
  });

  it('has correct displayName', () => {
    expect(SelectItems.displayName).toStrictEqual('@pattern-ui/core/SelectItems');
  });
});

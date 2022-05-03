import React from 'react';
import { render } from '@testing-library/react';
import { itSupportsSystemProps } from '@pattern/tests';
import { ListItem, ListItemProps } from './ListItem';

const defaultProps: ListItemProps = {
  icon: '$',
  children: 'test-list-item',
};

describe('@pattern/core/ListItem', () => {
  itSupportsSystemProps({
    component: ListItem,
    props: defaultProps,
    displayName: '@pattern/core/ListItem',
  });

  it('renders icon based on prop', () => {
    const { container: withIcon } = render(<ListItem icon="$">test-item</ListItem>);
    const { container: withoutIcon } = render(<ListItem>test-item</ListItem>);
    expect(withIcon.querySelectorAll('.pattern-List-itemIcon')).toHaveLength(1);
    expect(withoutIcon.querySelectorAll('.pattern-List-itemIcon')).toHaveLength(0);
  });
});

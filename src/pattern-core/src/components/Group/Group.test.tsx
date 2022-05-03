import React from 'react';
import { render } from '@testing-library/react';
import { itRendersChildren, itSupportsSystemProps } from '@pattern/tests';
import { Group, GroupProps } from './Group';

const defaultProps: GroupProps = {};

describe('@pattern/core/Group', () => {
  itRendersChildren(Group, defaultProps);
  itSupportsSystemProps({
    component: Group,
    props: defaultProps,
    displayName: '@pattern/core/Group',
    refType: HTMLDivElement,
  });

  it('has no falsy children', () => {
    const children = [undefined, null, <div key="1" />];
    const { container } = render(<Group>{children}</Group>);
    expect(container.querySelectorAll('.pattern-Group-child')).toHaveLength(1);
  });
});

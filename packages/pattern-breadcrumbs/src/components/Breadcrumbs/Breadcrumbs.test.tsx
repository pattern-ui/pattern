import React from 'react';
import { render, screen } from '@testing-library/react';
import { itSupportsSystemProps } from '@pattern-ui/tests';
import { Text } from '@pattern-ui/text';
import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs';

const defaultProps: BreadcrumbsProps = {
  children: [
    { title: 'Pattern', href: '#' },
    { title: 'Pattern hooks', href: '#' },
    { title: 'use-id', href: '#' },
  ].map((item) => (
    <Text<'a'> variant="link" component="a" href={item.href} key={item.title}>
      {item.title}
    </Text>
  )),
};

describe('@pattern-ui/core/Breadcrumbs', () => {
  itSupportsSystemProps({
    component: Breadcrumbs,
    props: defaultProps,
    displayName: '@pattern-ui/core/Breadcrumbs',
    refType: HTMLDivElement,
  });

  it('renders correct amount of children and separators', () => {
    const { container } = render(<Breadcrumbs {...defaultProps} />);
    expect(container.querySelectorAll('.pattern-Breadcrumbs-breadcrumb')).toHaveLength(3);
    expect(container.querySelectorAll('.pattern-Breadcrumbs-separator')).toHaveLength(2);
  });

  it('accepts separator from props', () => {
    render(<Breadcrumbs separator="test-separator" {...defaultProps} />);
    expect(screen.getAllByText('test-separator')).toHaveLength(2);
  });
});

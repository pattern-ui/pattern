import React from 'react';
import { checkAccessibility, itSupportsSystemProps } from '@pattern-ui/tests';
import { Pagination, PaginationProps } from './Pagination';

const defaultProps: PaginationProps = {
  total: 10,
  getItemAriaLabel: () => 'test-label',
};

describe('@pattern-ui/core/Pagination', () => {
  checkAccessibility([<Pagination {...defaultProps} />]);
  itSupportsSystemProps({
    component: Pagination,
    props: defaultProps,
    displayName: '@pattern-ui/core/Pagination',
    refType: HTMLDivElement,
  });
});

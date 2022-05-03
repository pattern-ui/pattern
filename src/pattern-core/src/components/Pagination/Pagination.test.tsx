import React from 'react';
import { checkAccessibility, itSupportsSystemProps } from '@pattern/tests';
import { Pagination, PaginationProps } from './Pagination';

const defaultProps: PaginationProps = {
  total: 10,
  getItemAriaLabel: () => 'test-label',
};

describe('@pattern/core/Pagination', () => {
  checkAccessibility([<Pagination {...defaultProps} />]);
  itSupportsSystemProps({
    component: Pagination,
    props: defaultProps,
    displayName: '@pattern/core/Pagination',
    refType: HTMLDivElement,
  });
});

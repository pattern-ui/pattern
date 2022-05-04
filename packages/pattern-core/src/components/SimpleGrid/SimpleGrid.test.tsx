import React from 'react';
import { itRendersChildren, itSupportsSystemProps } from '@pattern/tests';
import { SimpleGrid, SimpleGridProps } from './SimpleGrid';

const defaultProps: SimpleGridProps = {
  cols: 2,
  children: <span>test</span>,
};

describe('@pattern/core/SimpleGrid', () => {
  itRendersChildren(SimpleGrid, defaultProps);
  itSupportsSystemProps({
    component: SimpleGrid,
    props: defaultProps,
    displayName: '@pattern/core/SimpleGrid',
    refType: HTMLDivElement,
  });
});

import React from 'react';
import { itRendersChildren, itSupportsSystemProps } from '@pattern-ui/tests';
import { SimpleGrid, SimpleGridProps } from './SimpleGrid';

const defaultProps: SimpleGridProps = {
  cols: 2,
  children: <span>test</span>,
};

describe('@pattern-ui/core/SimpleGrid', () => {
  itRendersChildren(SimpleGrid, defaultProps);
  itSupportsSystemProps({
    component: SimpleGrid,
    props: defaultProps,
    displayName: '@pattern-ui/core/SimpleGrid',
    refType: HTMLDivElement,
  });
});

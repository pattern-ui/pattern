import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@pattern/tests';
import { Box, BoxProps } from './Box';

const defaultProps: BoxProps<'div'> = {};

describe('@pattern/core/Box', () => {
  itRendersChildren(Box, defaultProps);
  itIsPolymorphic(Box, defaultProps);
  itSupportsSystemProps({
    component: Box,
    props: defaultProps,
    displayName: '@pattern/core/Box',
    refType: HTMLDivElement,
  });
});

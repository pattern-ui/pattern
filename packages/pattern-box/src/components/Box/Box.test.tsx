import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@pattern-ui/tests';
import { Box, BoxProps } from '@pattern-ui/box';

const defaultProps: BoxProps<'div'> = {};

describe('@pattern-ui/core/Box', () => {
  itRendersChildren(Box, defaultProps);
  itIsPolymorphic(Box, defaultProps);
  itSupportsSystemProps({
    component: Box,
    props: defaultProps,
    displayName: '@pattern-ui/core/Box',
    refType: HTMLDivElement,
  });
});

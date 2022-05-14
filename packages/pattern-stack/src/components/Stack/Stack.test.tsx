import { itRendersChildren, itSupportsSystemProps } from '@pattern-ui/tests';
import { Stack, StackProps } from './Stack';

const defaultProps: StackProps = {};

describe('@pattern-ui/core/Stack', () => {
  itRendersChildren(Stack, defaultProps);
  itSupportsSystemProps({
    component: Stack,
    props: defaultProps,
    displayName: '@pattern-ui/core/Stack',
    refType: HTMLDivElement,
  });
});

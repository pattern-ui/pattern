import { itRendersChildren, itSupportsSystemProps } from '@pattern/tests';
import { Stack, StackProps } from './Stack';

const defaultProps: StackProps = {};

describe('@pattern/core/Stack', () => {
  itRendersChildren(Stack, defaultProps);
  itSupportsSystemProps({
    component: Stack,
    props: defaultProps,
    displayName: '@pattern/core/Stack',
    refType: HTMLDivElement,
  });
});

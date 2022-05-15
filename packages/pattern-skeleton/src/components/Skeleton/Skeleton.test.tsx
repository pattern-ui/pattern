import { itRendersChildren, itSupportsSystemProps } from '@pattern-ui/tests';
import { Skeleton, SkeletonProps } from './Skeleton';

const defaultProps: SkeletonProps = {};

describe('@pattern-ui/core/Skeleton', () => {
  itRendersChildren(Skeleton, defaultProps);
  itSupportsSystemProps({
    component: Skeleton,
    props: defaultProps,
    displayName: '@pattern-ui/core/Skeleton',
    refType: HTMLDivElement,
  });
});

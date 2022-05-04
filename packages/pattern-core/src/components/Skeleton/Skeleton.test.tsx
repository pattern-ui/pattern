import { itRendersChildren, itSupportsSystemProps } from '@pattern/tests';
import { Skeleton, SkeletonProps } from './Skeleton';

const defaultProps: SkeletonProps = {};

describe('@pattern/core/Skeleton', () => {
  itRendersChildren(Skeleton, defaultProps);
  itSupportsSystemProps({
    component: Skeleton,
    props: defaultProps,
    displayName: '@pattern/core/Skeleton',
    refType: HTMLDivElement,
  });
});

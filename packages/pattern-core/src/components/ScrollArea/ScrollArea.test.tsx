import { itRendersChildren, itSupportsSystemProps } from '@pattern/tests';
import { ScrollArea, ScrollAreaProps } from './ScrollArea';

const defaultProps: ScrollAreaProps = {};

describe('@pattern/core/ScrollArea', () => {
  itRendersChildren(ScrollArea, defaultProps);
  itSupportsSystemProps({
    component: ScrollArea,
    props: defaultProps,
    displayName: '@pattern/core/ScrollArea',
    refType: HTMLDivElement,
  });
});

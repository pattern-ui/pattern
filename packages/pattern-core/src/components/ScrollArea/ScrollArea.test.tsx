import { itRendersChildren, itSupportsSystemProps } from '@pattern-ui/tests';
import { ScrollArea, ScrollAreaProps } from './ScrollArea';

const defaultProps: ScrollAreaProps = {};

describe('@pattern-ui/core/ScrollArea', () => {
  itRendersChildren(ScrollArea, defaultProps);
  itSupportsSystemProps({
    component: ScrollArea,
    props: defaultProps,
    displayName: '@pattern-ui/core/ScrollArea',
    refType: HTMLDivElement,
  });
});

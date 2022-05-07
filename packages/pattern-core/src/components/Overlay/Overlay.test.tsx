import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@pattern-ui/tests';
import { Overlay, OverlayProps } from './Overlay';

const defaultProps: OverlayProps<'div'> = {};

describe('@pattern-ui/core/Overlay', () => {
  itIsPolymorphic(Overlay, defaultProps);
  itRendersChildren(Overlay, defaultProps);
  itSupportsSystemProps({
    component: Overlay,
    props: defaultProps,
    displayName: '@pattern-ui/core/Overlay',
    refType: HTMLDivElement,
  });
});

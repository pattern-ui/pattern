import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@pattern/tests';
import { Overlay, OverlayProps } from './Overlay';

const defaultProps: OverlayProps<'div'> = {};

describe('@pattern/core/Overlay', () => {
  itIsPolymorphic(Overlay, defaultProps);
  itRendersChildren(Overlay, defaultProps);
  itSupportsSystemProps({
    component: Overlay,
    props: defaultProps,
    displayName: '@pattern/core/Overlay',
    refType: HTMLDivElement,
  });
});

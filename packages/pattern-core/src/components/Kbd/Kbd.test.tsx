import { itRendersChildren, itSupportsSystemProps } from '@pattern-ui/tests';
import { Kbd, KbdProps } from './Kbd';

const defaultProps: KbdProps = { children: 'test' };

describe('@pattern-ui/core/Kbd', () => {
  itRendersChildren(Kbd, defaultProps);
  itSupportsSystemProps({
    component: Kbd,
    props: defaultProps,
    displayName: '@pattern-ui/core/Kbd',
    refType: HTMLElement,
  });
});

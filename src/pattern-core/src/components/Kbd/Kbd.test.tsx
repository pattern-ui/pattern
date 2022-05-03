import { itRendersChildren, itSupportsSystemProps } from '@pattern/tests';
import { Kbd, KbdProps } from './Kbd';

const defaultProps: KbdProps = { children: 'test' };

describe('@pattern/core/Kbd', () => {
  itRendersChildren(Kbd, defaultProps);
  itSupportsSystemProps({
    component: Kbd,
    props: defaultProps,
    displayName: '@pattern/core/Kbd',
    refType: HTMLElement,
  });
});

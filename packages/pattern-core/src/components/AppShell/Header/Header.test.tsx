import { itRendersChildren, itSupportsSystemProps } from '@pattern-ui/tests';
import { Header, HeaderProps } from './Header';

const defaultProps: HeaderProps = {
  height: 60,
  children: 'test-header',
};

describe('@pattern-ui/core/Header', () => {
  itRendersChildren(Header, defaultProps);
  itSupportsSystemProps({
    component: Header,
    props: defaultProps,
    displayName: '@pattern-ui/core/Header',
    refType: HTMLElement,
  });
});

import { itRendersChildren, itSupportsSystemProps } from '@pattern/tests';
import { Header, HeaderProps } from './Header';

const defaultProps: HeaderProps = {
  height: 60,
  children: 'test-header',
};

describe('@pattern/core/Header', () => {
  itRendersChildren(Header, defaultProps);
  itSupportsSystemProps({
    component: Header,
    props: defaultProps,
    displayName: '@pattern/core/Header',
    refType: HTMLElement,
  });
});

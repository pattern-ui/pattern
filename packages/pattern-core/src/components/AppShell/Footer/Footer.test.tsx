import { itRendersChildren, itSupportsSystemProps } from '@pattern/tests';
import { Footer, FooterProps } from './Footer';

const defaultProps: FooterProps = {
  height: 60,
  children: 'test-footer',
};

describe('@pattern/core/Footer', () => {
  itRendersChildren(Footer, defaultProps);
  itSupportsSystemProps({
    component: Footer,
    props: defaultProps,
    displayName: '@pattern/core/Footer',
    refType: HTMLElement,
  });
});

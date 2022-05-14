import { itRendersChildren, itSupportsSystemProps } from '@pattern-ui/tests';
import { Footer, FooterProps } from './Footer';

const defaultProps: FooterProps = {
  height: 60,
  children: 'test-footer',
};

describe('@pattern-ui/core/Footer', () => {
  itRendersChildren(Footer, defaultProps);
  itSupportsSystemProps({
    component: Footer,
    props: defaultProps,
    displayName: '@pattern-ui/core/Footer',
    refType: HTMLElement,
  });
});

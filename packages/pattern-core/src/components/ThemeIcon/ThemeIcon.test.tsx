import { itRendersChildren, itSupportsSystemProps } from '@pattern-ui/tests';
import { ThemeIcon, ThemeIconProps } from './ThemeIcon';

const defaultProps: ThemeIconProps = {
  children: 'test-icon',
};

describe('@pattern-ui/core/ThemeIcon', () => {
  itRendersChildren(ThemeIcon, defaultProps);
  itSupportsSystemProps({
    component: ThemeIcon,
    props: defaultProps,
    displayName: '@pattern-ui/core/ThemeIcon',
    refType: HTMLDivElement,
  });
});

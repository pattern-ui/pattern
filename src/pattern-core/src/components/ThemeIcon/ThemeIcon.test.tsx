import { itRendersChildren, itSupportsSystemProps } from '@pattern/tests';
import { ThemeIcon, ThemeIconProps } from './ThemeIcon';

const defaultProps: ThemeIconProps = {
  children: 'test-icon',
};

describe('@pattern/core/ThemeIcon', () => {
  itRendersChildren(ThemeIcon, defaultProps);
  itSupportsSystemProps({
    component: ThemeIcon,
    props: defaultProps,
    displayName: '@pattern/core/ThemeIcon',
    refType: HTMLDivElement,
  });
});

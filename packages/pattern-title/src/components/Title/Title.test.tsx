import { itRendersChildren, itSupportsSystemProps } from '@pattern-ui/tests';
import { Title, TitleProps } from './Title';

const defaultProps: TitleProps = {};

describe('@pattern-ui/core/Title', () => {
  itRendersChildren(Title, defaultProps);
  itSupportsSystemProps({
    component: Title,
    props: defaultProps,
    displayName: '@pattern-ui/core/Title',
    refType: HTMLHeadingElement,
  });
});

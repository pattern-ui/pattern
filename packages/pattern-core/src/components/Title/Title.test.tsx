import { itRendersChildren, itSupportsSystemProps } from '@pattern/tests';
import { Title, TitleProps } from './Title';

const defaultProps: TitleProps = {};

describe('@pattern/core/Title', () => {
  itRendersChildren(Title, defaultProps);
  itSupportsSystemProps({
    component: Title,
    props: defaultProps,
    displayName: '@pattern/core/Title',
    refType: HTMLHeadingElement,
  });
});

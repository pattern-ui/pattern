import { itRendersChildren, itSupportsSystemProps } from '@pattern/tests';
import { Container, ContainerProps } from './Container';

const defaultProps: ContainerProps = {};

describe('@pattern/core/Container', () => {
  itRendersChildren(Container, defaultProps);
  itSupportsSystemProps({
    component: Container,
    props: defaultProps,
    excludePadding: true,
    displayName: '@pattern/core/Container',
    refType: HTMLDivElement,
  });
});

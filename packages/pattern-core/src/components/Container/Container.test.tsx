import { itRendersChildren, itSupportsSystemProps } from '@pattern-ui/tests';
import { Container, ContainerProps } from './Container';

const defaultProps: ContainerProps = {};

describe('@pattern-ui/core/Container', () => {
  itRendersChildren(Container, defaultProps);
  itSupportsSystemProps({
    component: Container,
    props: defaultProps,
    excludePadding: true,
    displayName: '@pattern-ui/core/Container',
    refType: HTMLDivElement,
  });
});

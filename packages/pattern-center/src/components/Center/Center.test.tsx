import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@pattern-ui/tests';
import { Center, CenterProps } from './Center';

const defaultProps: CenterProps<'div'> = {
  children: 'test-center',
};

describe('@pattern-ui/core/Center', () => {
  itRendersChildren(Center, defaultProps);
  itIsPolymorphic(Center, defaultProps);
  itSupportsSystemProps({
    component: Center,
    props: defaultProps,
    displayName: '@pattern-ui/core/Center',
    refType: HTMLDivElement,
  });
});

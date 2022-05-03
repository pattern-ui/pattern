import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@pattern/tests';
import { Center, CenterProps } from './Center';

const defaultProps: CenterProps<'div'> = {
  children: 'test-center',
};

describe('@pattern/core/Center', () => {
  itRendersChildren(Center, defaultProps);
  itIsPolymorphic(Center, defaultProps);
  itSupportsSystemProps({
    component: Center,
    props: defaultProps,
    displayName: '@pattern/core/Center',
    refType: HTMLDivElement,
  });
});

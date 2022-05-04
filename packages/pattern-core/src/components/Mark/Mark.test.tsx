import { itRendersChildren, itSupportsSystemProps } from '@pattern/tests';
import { Mark, MarkProps } from './Mark';

const defaultProps: MarkProps = {
  children: 'test-mark',
};

describe('@pattern/core/Mark', () => {
  itRendersChildren(Mark, defaultProps);
  itSupportsSystemProps({
    component: Mark,
    props: defaultProps,
    displayName: '@pattern/core/Mark',
    refType: HTMLElement,
  });
});

import { itRendersChildren, itSupportsSystemProps } from '@pattern-ui/tests';
import { Mark, MarkProps } from './Mark';

const defaultProps: MarkProps = {
  children: 'test-mark',
};

describe('@pattern-ui/core/Mark', () => {
  itRendersChildren(Mark, defaultProps);
  itSupportsSystemProps({
    component: Mark,
    props: defaultProps,
    displayName: '@pattern-ui/core/Mark',
    refType: HTMLElement,
  });
});

import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@pattern-ui/tests';
import { Paper, PaperProps } from './Paper';

const defaultProps: PaperProps<'div'> = {};

describe('@pattern-ui/core/Paper', () => {
  itRendersChildren(Paper, defaultProps);
  itIsPolymorphic(Paper, defaultProps);
  itSupportsSystemProps({
    component: Paper,
    props: defaultProps,
    displayName: '@pattern-ui/core/Paper',
    refType: HTMLDivElement,
  });

  it('has correct displayName', () => {
    expect(Paper.displayName).toStrictEqual('@pattern-ui/core/Paper');
  });
});

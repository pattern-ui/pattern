import { itSupportsRef, itRendersChildren } from '@pattern-ui/tests';
import { Affix, AffixProps } from './Affix';

const defaultProps: AffixProps = {};

describe('@pattern-ui/core/Affix', () => {
  itSupportsRef(Affix, defaultProps, HTMLDivElement);
  itRendersChildren(Affix, defaultProps);

  it('has correct displayName', () => {
    expect(Affix.displayName).toStrictEqual('@pattern-ui/core/Affix');
  });
});

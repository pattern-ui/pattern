import { itSupportsRef, itRendersChildren } from '@pattern/tests';
import { Affix, AffixProps } from './Affix';

const defaultProps: AffixProps = {};

describe('@pattern/core/Affix', () => {
  itSupportsRef(Affix, defaultProps, HTMLDivElement);
  itRendersChildren(Affix, defaultProps);

  it('has correct displayName', () => {
    expect(Affix.displayName).toStrictEqual('@pattern/core/Affix');
  });
});

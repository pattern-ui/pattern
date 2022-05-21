import { itRendersChildren, itSupportsSystemProps } from '@pattern-ui/tests';
import { HorizontalSection } from '../HorizontalSection/HorizontalSection';
import { Aside, AsideProps } from './Aside';

const defaultProps: AsideProps = { children: 'test-aside' };

describe('@pattern-ui/core/Aside', () => {
  itRendersChildren(Aside, defaultProps);
  itSupportsSystemProps({
    component: Aside,
    props: defaultProps,
    displayName: '@pattern-ui/core/Aside',
    refType: HTMLElement,
  });

  it('exposes HorizontalSection.HorizontalSection as Aside.Section', () => {
    expect(Aside.Section).toBe(HorizontalSection.Section);
  });
});

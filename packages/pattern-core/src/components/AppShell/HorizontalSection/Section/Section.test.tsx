import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@pattern-ui/tests';
import { Section, SectionProps } from './Section';

const defaultProps: SectionProps<'div'> = {
  children: 'test-section',
};

describe('@pattern-ui/core/Section', () => {
  itRendersChildren(Section, defaultProps);
  itIsPolymorphic(Section, defaultProps);

  itSupportsSystemProps({
    component: Section,
    props: defaultProps,
    displayName: '@pattern-ui/core/Section',
    refType: HTMLDivElement,
  });
});

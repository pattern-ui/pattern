import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@pattern/tests';
import { Section, SectionProps } from './Section';

const defaultProps: SectionProps<'div'> = {
  children: 'test-section',
};

describe('@pattern/core/Section', () => {
  itRendersChildren(Section, defaultProps);
  itIsPolymorphic(Section, defaultProps);

  itSupportsSystemProps({
    component: Section,
    props: defaultProps,
    displayName: '@pattern/core/Section',
    refType: HTMLDivElement,
  });
});

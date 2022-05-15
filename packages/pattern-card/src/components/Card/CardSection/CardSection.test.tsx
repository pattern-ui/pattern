import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@pattern-ui/tests';
import { CardSection, CardSectionProps } from './CardSection';

const defaultProps: CardSectionProps<'div'> = {};

describe('@pattern-ui/core/CardSection', () => {
  itRendersChildren(CardSection, defaultProps);
  itIsPolymorphic(CardSection, defaultProps);
  itSupportsSystemProps({
    component: CardSection,
    props: defaultProps,
    displayName: '@pattern-ui/core/CardSection',
    refType: HTMLDivElement,
  });
});

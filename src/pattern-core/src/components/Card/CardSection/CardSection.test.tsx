import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@pattern/tests';
import { CardSection, CardSectionProps } from './CardSection';

const defaultProps: CardSectionProps<'div'> = {};

describe('@pattern/core/CardSection', () => {
  itRendersChildren(CardSection, defaultProps);
  itIsPolymorphic(CardSection, defaultProps);
  itSupportsSystemProps({
    component: CardSection,
    props: defaultProps,
    displayName: '@pattern/core/CardSection',
    refType: HTMLDivElement,
  });
});

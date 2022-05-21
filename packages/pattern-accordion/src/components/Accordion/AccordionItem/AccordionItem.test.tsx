import {
  itSupportsSystemProps,
  createContextContainer,
  itRendersChildren,
  itThrowsContextError,
} from '@pattern-ui/tests';
import { AccordionProvider } from '../AccordionProvider';
import { ACCORDION_ERRORS } from '../Accordion.errors';
import { AccordionItem, AccordionItemProps } from './AccordionItem';

const defaultProps: AccordionItemProps = {
  value: 'test',
  children: 'Test item',
};

const TestContainer = createContextContainer(AccordionItem, AccordionProvider, { order: 3 });

describe('@pattern-ui/core/AccordionItem', () => {
  itRendersChildren(TestContainer, defaultProps);
  itThrowsContextError(AccordionItem, defaultProps, ACCORDION_ERRORS['accordion-context']);
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@pattern-ui/core/AccordionItem',
  });
});

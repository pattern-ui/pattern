import {
  createContextContainer,
  itSupportsSystemProps,
  itThrowsContextError,
  itRendersChildren,
} from '@pattern/tests';
import { AccordionPanel, AccordionPanelProps } from './AccordionPanel';
import { AccordionProvider } from '../AccordionProvider';
import { AccordionItemContextProvider } from '../AccordionItem.context';
import { ACCORDION_ERRORS } from '../Accordion.errors';

const TestContainer = createContextContainer(
  createContextContainer(AccordionPanel, AccordionItemContextProvider, {
    value: { value: 'test-value' },
  }),
  AccordionProvider
);

const defaultProps: AccordionPanelProps = {};

describe('@pattern/core/AccordionPanel', () => {
  itThrowsContextError(
    createContextContainer(AccordionPanel, AccordionItemContextProvider, {
      value: { value: 'test-value' },
    }),
    defaultProps,
    ACCORDION_ERRORS['accordion-context']
  );

  itRendersChildren(TestContainer, defaultProps);
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    displayName: '@pattern/core/AccordionPanel',
  });
});

import {
  createContextContainer,
  itSupportsSystemProps,
  itThrowsContextError,
  itRendersChildren,
} from '@pattern-ui/tests';
import { AccordionProvider } from '../AccordionProvider';
import { AccordionItemContextProvider } from '../AccordionItem.context';
import { ACCORDION_ERRORS } from '../Accordion.errors';
import { AccordionPanel, AccordionPanelProps } from './AccordionPanel';

const TestContainer = createContextContainer(
  createContextContainer(AccordionPanel, AccordionItemContextProvider, {
    value: { value: 'test-value' },
  }),
  AccordionProvider
);

const defaultProps: AccordionPanelProps = {};

describe('@pattern-ui/core/AccordionPanel', () => {
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
    displayName: '@pattern-ui/core/AccordionPanel',
  });
});

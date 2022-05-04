import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  createContextContainer,
  itSupportsSystemProps,
  itThrowsContextError,
  itRendersChildren,
} from '@pattern/tests';
import { AccordionControl, AccordionControlProps } from './AccordionControl';
import { AccordionProvider } from '../AccordionProvider';
import { AccordionItemContextProvider } from '../AccordionItem.context';
import { ACCORDION_ERRORS } from '../Accordion.errors';

const TestContainer = createContextContainer(
  createContextContainer(AccordionControl, AccordionItemContextProvider, {
    value: { value: 'test-value' },
  }),
  AccordionProvider
);

const defaultProps: AccordionControlProps = {};

describe('@pattern/core/AccordionControl', () => {
  itThrowsContextError(
    createContextContainer(AccordionControl, AccordionItemContextProvider, {
      value: { value: 'test-value' },
    }),
    defaultProps,
    ACCORDION_ERRORS['accordion-context']
  );

  itRendersChildren(TestContainer, defaultProps);
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    displayName: '@pattern/core/AccordionControl',
    refType: HTMLButtonElement,
  });

  it('calls onClick function from props', () => {
    const spy = jest.fn();
    render(<TestContainer {...defaultProps} onClick={spy} />);
    userEvent.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls onKeyDown function from props', () => {
    const spy = jest.fn();
    render(<TestContainer {...defaultProps} onKeyDown={spy} />);
    userEvent.type(screen.getByRole('button'), 'R');
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

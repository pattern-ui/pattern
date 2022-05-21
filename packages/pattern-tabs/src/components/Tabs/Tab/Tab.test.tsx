import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import {
  itSupportsSystemProps,
  createContextContainer,
  itRendersChildren,
  itSupportsFocusEvents,
  itThrowsContextError,
} from '@pattern-ui/tests';
import { TabsProvider } from '../TabsProvider';
import { TABS_ERRORS } from '../Tabs.errors';
import { Tab, TabProps } from './Tab';

const defaultProps: TabProps = {
  value: 'test',
  children: 'Test tab',
};

const TestContainer = createContextContainer(Tab, TabsProvider);

describe('@pattern-ui/core/Tab', () => {
  itThrowsContextError(Tab, defaultProps, TABS_ERRORS['tabs-context']);
  itRendersChildren(TestContainer, defaultProps);
  itSupportsFocusEvents(TestContainer, defaultProps, '[role="tab"]');
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLButtonElement,
    displayName: '@pattern-ui/core/Tab',
  });

  it('calls onClick function from props', () => {
    const spy = jest.fn();
    render(<TestContainer {...defaultProps} onClick={spy} />);
    userEvent.click(screen.getByRole('tab'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls onKeyDown function from props', () => {
    const spy = jest.fn();
    render(<TestContainer {...defaultProps} onKeyDown={spy} />);
    userEvent.type(screen.getByRole('tab'), 'R');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('renders given right section and icon', () => {
    render(<TestContainer {...defaultProps} rightSection="test-right-section" icon="test-icon" />);
    expect(screen.getByText('test-right-section')).toBeInTheDocument();
    expect(screen.getByText('test-icon')).toBeInTheDocument();
  });
});

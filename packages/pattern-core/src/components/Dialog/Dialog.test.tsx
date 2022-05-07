import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { itRendersChildren, itSupportsRef, itSupportsSystemProps } from '@pattern-ui/tests';
import { Dialog, PatternDialog, DialogProps } from './Dialog';

const defaultProps: DialogProps = {
  opened: true,
  transitionDuration: 0,
  withCloseButton: true,
};

describe('@pattern-ui/core/Dialog', () => {
  itRendersChildren(PatternDialog, defaultProps);
  itSupportsRef(Dialog, defaultProps, HTMLDivElement);
  itSupportsSystemProps({ component: PatternDialog, props: defaultProps });

  it('calls onClose when close button is clicked', () => {
    const spy = jest.fn();
    render(<PatternDialog opened withCloseButton onClose={spy} />);
    userEvent.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('has correct displayName', () => {
    expect(Dialog.displayName).toStrictEqual('@pattern-ui/core/Dialog');
  });
});

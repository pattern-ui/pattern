import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsRef,
} from '@pattern/tests';
import { TimeField } from './TimeField';

const defaultProps = {
  onChange: () => {},
  setValue: () => {},
};

describe('@pattern/dates/TimeField', () => {
  itSupportsClassName(TimeField, defaultProps);
  itSupportsOthers(TimeField, defaultProps);
  itSupportsStyle(TimeField, defaultProps);
  itSupportsRef(TimeField, defaultProps, HTMLInputElement);

  it('renders separator when withSeparator prop set to true', () => {
    const view = render(<TimeField {...defaultProps} withSeparator />);
    expect(screen.getByText(':')).toBeInTheDocument();
    view.rerender(<TimeField {...defaultProps} withSeparator={false} />);
    expect(screen.queryAllByText(':')).toHaveLength(0);
  });

  it('has correct displayName', () => {
    expect(TimeField.displayName).toStrictEqual('@pattern/dates/TimeField');
  });
});

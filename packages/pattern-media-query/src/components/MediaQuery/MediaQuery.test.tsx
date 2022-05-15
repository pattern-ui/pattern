import React from 'react';
import { itSupportsClassName } from '@pattern-ui/tests';
import { MediaQuery, MediaQueryProps } from './MediaQuery';

const defaultProps: MediaQueryProps = {
  styles: { fontWeight: 700 },
  children: <span>test-children</span>,
};

describe('@pattern-ui/core/MediaQuery', () => {
  itSupportsClassName(MediaQuery, defaultProps);

  it('has correct displayName', () => {
    expect(MediaQuery.displayName).toStrictEqual('@pattern-ui/core/MediaQuery');
  });
});

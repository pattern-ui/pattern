import React from 'react';
import { render } from '@testing-library/react';
import { itSupportsSystemProps } from '@pattern/tests';
import { Prism, PrismProps } from './Prism';

const defaultProps: PrismProps = {
  children: 'test',
  withLineNumbers: true,
  language: 'tsx',
};

describe('@pattern/prism/Prism', () => {
  itSupportsSystemProps({
    component: Prism,
    props: defaultProps,
    displayName: '@pattern/prism/Prism',
    refType: HTMLDivElement,
  });

  it('renders tooltip based on noCopy prop', () => {
    const { container: withCopy } = render(<Prism {...defaultProps} noCopy={false} />);
    const { container: withoutCopy } = render(<Prism {...defaultProps} noCopy />);

    expect(withCopy.querySelectorAll('.pattern-Prism-copy')).toHaveLength(1);
    expect(withoutCopy.querySelectorAll('.pattern-Prism-copy')).toHaveLength(0);
  });

  it('renders line numbers based on withLineNumbers prop', () => {
    const { container: withLineNumbers } = render(<Prism {...defaultProps} withLineNumbers />);
    const { container: withoutLineNumbers } = render(
      <Prism {...defaultProps} withLineNumbers={false} />
    );
    expect(withLineNumbers.querySelectorAll('.pattern-Prism-lineNumber')).toHaveLength(
      defaultProps.children.split('\n').length
    );
    expect(withoutLineNumbers.querySelectorAll('.pattern-Prism-lineNumber')).toHaveLength(0);
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { checkAccessibility, itRendersChildren, itSupportsSystemProps } from '@pattern/tests';
import { Blockquote, BlockquoteProps } from './Blockquote';

const defaultProps: BlockquoteProps = {
  children: 'test-quote',
  cite: 'test-cite',
};

describe('@pattern/core/Blockquote', () => {
  checkAccessibility([<Blockquote {...defaultProps} />]);
  itRendersChildren(Blockquote, defaultProps);
  itSupportsSystemProps({
    component: Blockquote,
    props: defaultProps,
    displayName: '@pattern/core/Blockquote',
    refType: HTMLQuoteElement,
  });

  it('renders given icon based on icon prop', () => {
    render(<Blockquote icon="test-icon" />);
    expect(screen.getByText('test-icon')).toBeInTheDocument();
  });

  it('hides icon if icon prop set to null', () => {
    const { container } = render(<Blockquote icon={null} />);
    expect(container.querySelectorAll('.pattern-Blockquote-icon')).toHaveLength(0);
  });

  it('renders given cite based on cite prop', () => {
    render(<Blockquote cite="test-cite" />);
    expect(screen.getByText('test-cite')).toBeInTheDocument();
  });
});

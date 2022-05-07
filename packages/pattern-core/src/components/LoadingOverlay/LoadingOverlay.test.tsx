import React from 'react';
import { render } from '@testing-library/react';
import { itSupportsSystemProps } from '@pattern-ui/tests';
import { LoadingOverlay, LoadingOverlayProps } from './LoadingOverlay';

const defaultProps: LoadingOverlayProps = {
  visible: true,
};

describe('@pattern-ui/core/LoadingOverlay', () => {
  itSupportsSystemProps({
    component: LoadingOverlay,
    props: defaultProps,
    displayName: '@pattern-ui/core/LoadingOverlay',
    refType: HTMLDivElement,
  });

  it('renders based on visible prop', () => {
    const { container: notVisible } = render(<LoadingOverlay visible={false} />);
    const { container: visible } = render(<LoadingOverlay visible />);
    expect(notVisible.querySelector('.pattern-LoadingOverlay-root')).toBe(null);
    expect(visible.querySelector('.pattern-LoadingOverlay-root')).toBeInTheDocument();
  });
});

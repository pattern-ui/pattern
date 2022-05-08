import React from 'react';
import { PatternProvider } from '@pattern-ui/styles';
import { renderWithAct } from './render-with-act';

export function itSupportsProviderDefaultProps<P>(
  Component: React.ComponentType<P>,
  requiredProps: P,
  name: string
) {
  it('supports default props on PatternProvider', async () => {
    const { container } = await renderWithAct(
      <PatternProvider defaultProps={{ [name]: { 'data-provider-prop': 'test-provider-prop' } }}>
        <Component {...requiredProps} />
      </PatternProvider>
    );

    expect(container.firstChild).toHaveAttribute('data-provider-prop', 'test-provider-prop');
  });
}

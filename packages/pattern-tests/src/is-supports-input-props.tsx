import React from 'react';
import { itSupportsInputIcon } from './it-supports-input-icon';
import { itSupportsInputRightSection } from './it-supports-input-right-section';
import { renderWithAct } from './render-with-act';

export function itSupportsInputProps<P>(
  Component: React.ComponentType<P>,
  requiredProps: P,
  name: string
) {
  itSupportsInputIcon(Component, requiredProps);
  itSupportsInputRightSection(Component, requiredProps);

  it('handles error and invalid state', async () => {
    const { container: invalid } = await renderWithAct(
      <Component {...requiredProps} required id="invalid-test-id" invalid />
    );

    expect(invalid.querySelector('#invalid-test-id')).toHaveAttribute('aria-invalid', 'true');
    expect(invalid.querySelectorAll(`.pattern-${name}-error`)).toHaveLength(0);
  });

  it('sets border-radius on input', async () => {
    const { container } = await renderWithAct(
      <Component {...requiredProps} radius={43} id="secret-test-id" />
    );
    expect(container.querySelector('#secret-test-id')).toHaveStyle({ borderRadius: '43px' });
  });
}

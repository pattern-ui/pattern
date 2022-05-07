import React from 'react';
import { render } from '@testing-library/react';
import { checkAccessibility, itSupportsFocusEvents, itSupportsSystemProps } from '@pattern-ui/tests';
import { Burger, BurgerProps } from './Burger';

const defaultProps: BurgerProps = {
  opened: true,
  title: 'Close navigation',
};

describe('@pattern-ui/core/Burger', () => {
  checkAccessibility([<Burger {...defaultProps} />]);
  itSupportsFocusEvents(Burger, defaultProps, 'button');
  itSupportsSystemProps({
    component: Burger,
    props: defaultProps,
    displayName: '@pattern-ui/core/Burger',
    refType: HTMLButtonElement,
  });

  it('renders cross when opened prop is true', () => {
    const { container: opened } = render(<Burger opened />);
    const { container: closed } = render(<Burger opened={false} />);
    expect(opened.querySelectorAll('.pattern-Burger-opened')).toHaveLength(1);
    expect(closed.querySelectorAll('.pattern-Burger-opened')).toHaveLength(0);
  });
});

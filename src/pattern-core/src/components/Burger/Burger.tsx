import React, { forwardRef } from 'react';
import {
  usePatternTheme,
  DefaultProps,
  PatternNumberSize,
  PatternColor,
  Selectors,
  usePatternDefaultProps,
} from '@pattern/styles';
import { UnstyledButton } from '../Button';
import useStyles from './Burger.styles';

export type BurgerStylesNames = Exclude<Selectors<typeof useStyles>, 'opened'>;

export interface BurgerProps
  extends DefaultProps<BurgerStylesNames>,
    React.ComponentPropsWithoutRef<'button'> {
  /** Burger state: true for cross, false for burger */
  opened: boolean;

  /** Burger color value, not connected to theme.colors, defaults to theme.black with light color scheme and theme.white with dark */
  color?: PatternColor;

  /** Predefined burger size or number to set width and height in px */
  size?: PatternNumberSize;
}

const defaultProps: Partial<BurgerProps> = {
  size: 'md',
};

export const Burger = forwardRef<HTMLButtonElement, BurgerProps>((props: BurgerProps, ref) => {
  const {
    className,
    opened,
    color,
    size = 'md',
    classNames,
    styles,
    ...others
  } = usePatternDefaultProps('Burger', defaultProps, props);
  const theme = usePatternTheme();
  const _color = color || (theme.colorScheme === 'dark' ? theme.white : theme.black);
  const { classes, cx } = useStyles(
    { color: _color, size },
    { classNames, styles, name: 'Burger' }
  );

  return (
    <UnstyledButton className={cx(classes.root, className)} ref={ref} {...others}>
      <div className={cx(classes.burger, { [classes.opened]: opened })} />
    </UnstyledButton>
  );
});

Burger.displayName = '@pattern/core/Burger';

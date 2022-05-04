import React, { forwardRef } from 'react';
import { PatternNumberSize, DefaultProps, Selectors } from '@pattern/styles';
import { Box } from '../../Box';
import useStyles from './SliderRoot.styles';

export type SliderRootStylesNames = Selectors<typeof useStyles>;

export interface SliderRootProps
  extends DefaultProps<SliderRootStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  size: PatternNumberSize;
  children: React.ReactNode;
  disabled: boolean;
}

export const SliderRoot = forwardRef<HTMLDivElement, SliderRootProps>(
  ({ className, size, classNames, styles, disabled, ...others }: SliderRootProps, ref) => {
    const { classes, cx } = useStyles({ size, disabled }, { classNames, styles, name: 'Slider' });
    return <Box {...others} tabIndex={-1} className={cx(classes.root, className)} ref={ref} />;
  }
);

SliderRoot.displayName = '@pattern/core/SliderRoot';

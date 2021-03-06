import React, { forwardRef } from 'react';
import { DefaultProps, PatternNumberSize, usePatternDefaultProps } from '@pattern-ui/styles';
import { Box } from '@pattern-ui/box';
import useStyles from './Skeleton.styles';

export interface SkeletonProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Should skeleton overlay be displayed */
  visible?: boolean;

  /** Skeleton height */
  height?: number | string;

  /** Skeleton width */
  width?: number | string;

  /** If Skeleton is a circle, it's width and border-radius will be equal to height */
  circle?: boolean;

  /** Radius from theme.radius or number to set border-radius in px */
  radius?: PatternNumberSize;

  /** Whether to show the animation effect */
  animate?: boolean;
}

const defaultProps: Partial<SkeletonProps> = {
  height: 'auto',
  width: '100%',
  visible: true,
  animate: true,
};

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>((props: SkeletonProps, ref) => {
  const {
    height,
    width,
    visible,
    animate,
    className,
    circle,
    radius,
    classNames,
    styles,
    ...others
  } = usePatternDefaultProps('Skeleton', defaultProps, props);

  const { classes, cx } = useStyles(
    { height, width, circle, radius, animate },
    { classNames, styles, name: 'Skeleton' }
  );

  return (
    <Box
      className={cx(classes.root, { [classes.visible]: visible }, className)}
      ref={ref}
      {...others}
    />
  );
});

Skeleton.displayName = '@pattern-ui/core/Skeleton';

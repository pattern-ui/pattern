import React, { forwardRef } from 'react';
import {
  DefaultProps,
  PatternNumberSize,
  usePatternDefaultProps,
  PatternSize,
} from '@pattern/styles';
import { Box } from '../Box';
import useStyles from './Container.styles';

export interface ContainerProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Predefined container max-width or number for max-width in px */
  size?: PatternNumberSize;

  /** If fluid is set to true, size prop is ignored and Container always take 100% of width */
  fluid?: boolean;

  /** Container sizes */
  sizes?: Record<PatternSize, number>;
}

const defaultProps: Partial<ContainerProps> = {
  sizes: {
    xs: 540,
    sm: 720,
    md: 960,
    lg: 1140,
    xl: 1320,
  },
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (props: ContainerProps, ref) => {
    const { className, fluid, size, styles, classNames, sizes, ...others } = usePatternDefaultProps(
      'Container',
      defaultProps,
      props
    );

    const { classes, cx } = useStyles(
      { fluid, size, sizes },
      { styles, classNames, name: 'Container' }
    );

    return <Box className={cx(classes.root, className)} ref={ref} {...others} />;
  }
);

Container.displayName = '@pattern/core/Container';

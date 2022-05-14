import React, { forwardRef } from 'react';
import { DefaultProps, PatternNumberSize, usePatternDefaultProps } from '@pattern-ui/styles';
import { Box } from '@pattern-ui/box';
import useStyles, { SimpleGridBreakpoint } from './SimpleGrid.styles';

export interface SimpleGridProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Breakpoints data to change items per row and spacing based on max-width */
  breakpoints?: SimpleGridBreakpoint[];

  /** Default amount of columns, used when none of breakpoints can be applied  */
  cols?: number;

  /** Default spacing between columns, used when none of breakpoints can be applied */
  spacing?: PatternNumberSize;
}

const defaultProps: Partial<SimpleGridProps> = {
  breakpoints: [],
  cols: 1,
  spacing: 'md',
};

export const SimpleGrid = forwardRef<HTMLDivElement, SimpleGridProps>(
  (props: SimpleGridProps, ref) => {
    const { className, breakpoints, cols, spacing, children, classNames, styles, ...others } =
      usePatternDefaultProps('SimpleGrid', defaultProps, props);

    const { classes, cx } = useStyles(
      { breakpoints, cols, spacing },
      { classNames, styles, name: 'SimpleGrid' }
    );

    return (
      <Box className={cx(classes.root, className)} ref={ref} {...others}>
        {children}
      </Box>
    );
  }
);

SimpleGrid.displayName = '@pattern-ui/core/SimpleGrid';

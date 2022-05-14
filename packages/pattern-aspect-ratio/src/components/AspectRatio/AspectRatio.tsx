import React, { forwardRef } from 'react';
import { DefaultProps, usePatternDefaultProps } from '@pattern-ui/styles';
import { Box } from '@pattern-ui/box';
import useStyles from './AspectRatio.styles';

export interface AspectRatioProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Aspect ratio, e.g. 16 / 9, 4 / 3, 1920 / 1080 */
  ratio: number;
}

export const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
  (props: AspectRatioProps, ref) => {
    const { className, ratio, children, classNames, styles, ...others } = usePatternDefaultProps(
      'AspectRatio',
      {},
      props
    );

    const { classes, cx } = useStyles({ ratio }, { name: 'AspectRatio', classNames, styles });

    return (
      <Box ref={ref} className={cx(classes.root, className)} {...others}>
        {children}
      </Box>
    );
  }
);

AspectRatio.displayName = '@pattern-ui/core/AspectRatio';

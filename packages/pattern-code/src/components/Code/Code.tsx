import React, { forwardRef } from 'react';
import {
  usePatternTheme,
  DefaultProps,
  PatternColor,
  usePatternDefaultProps,
} from '@pattern-ui/styles';
import { Box } from '@pattern-ui/box';
import useStyles from './Code.styles';

export interface CodeProps extends DefaultProps, React.ComponentPropsWithoutRef<'code'> {
  /** Code content */
  children: React.ReactNode;

  /** Code color and background from theme, defaults to gray in light theme and to dark in dark theme */
  color?: PatternColor;

  /** True for code block, false for inline code */
  block?: boolean;
}

export const Code = forwardRef<HTMLElement, CodeProps>((props: CodeProps, ref) => {
  const { className, children, block, color, styles, classNames, ...others } =
    usePatternDefaultProps('Code', {}, props);
  const theme = usePatternTheme();
  const themeColor = color || (theme.colorScheme === 'dark' ? 'dark' : 'gray');
  const { classes, cx } = useStyles({ color: themeColor }, { name: 'Code', styles, classNames });

  if (block) {
    return (
      <Box
        component="pre"
        dir="ltr"
        className={cx(classes.root, classes.block, className)}
        ref={ref as any}
        {...others}
      >
        {children}
      </Box>
    );
  }

  return (
    <Box component="code" className={cx(classes.root, className)} ref={ref} dir="ltr" {...others}>
      {children}
    </Box>
  );
});

Code.displayName = '@pattern-ui/core/Code';

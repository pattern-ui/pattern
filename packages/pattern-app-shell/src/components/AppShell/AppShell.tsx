import React, { forwardRef } from 'react';
import {
  PatternNumberSize,
  DefaultProps,
  Selectors,
  PatternStyleSystemSize,
  getDefaultZIndex,
  usePatternDefaultProps,
} from '@pattern-ui/styles';
import { Box } from '@pattern-ui/box';
import { AppShellProvider } from './AppShell.context';
import useStyles from './AppShell.styles';

export type AppShellStylesNames = Selectors<typeof useStyles>;

export interface AppShellProps
  extends Omit<DefaultProps<AppShellStylesNames>, PatternStyleSystemSize> {
  /** <Navbar /> component */
  navbar?: React.ReactElement;

  /** <Aside /> component */
  aside?: React.ReactElement;

  /** <Header /> component */
  header?: React.ReactElement;

  /** <Footer /> component */
  footer?: React.ReactElement;

  /** zIndex prop passed to Navbar and Header components */
  zIndex?: number;

  /** true to switch from static layout to fixed */
  fixed?: boolean;

  /** AppShell content */
  children: React.ReactNode;

  /** Content padding */
  padding?: PatternNumberSize;

  /** Breakpoint at which Navbar component should no longer be offset with padding-left, applicable only for fixed position */
  navbarOffsetBreakpoint?: PatternNumberSize;

  /** Breakpoint at which Aside component should no longer be offset with padding-right, applicable only for fixed position */
  asideOffsetBreakpoint?: PatternNumberSize;
}

const defaultProps: Partial<AppShellProps> = {
  fixed: false,
  zIndex: getDefaultZIndex('app'),
  padding: 'md',
};

export const AppShell = forwardRef<HTMLDivElement, AppShellProps>((props: AppShellProps, ref) => {
  const {
    children,
    navbar,
    header,
    footer,
    aside,
    fixed,
    zIndex,
    padding,
    navbarOffsetBreakpoint,
    asideOffsetBreakpoint,
    className,
    styles,
    classNames,
    ...others
  } = usePatternDefaultProps('AppShell', defaultProps, props);
  const { classes, cx } = useStyles(
    { padding, fixed, navbarOffsetBreakpoint, asideOffsetBreakpoint },
    { styles, classNames, name: 'AppShell' }
  );

  return (
    <AppShellProvider value={{ fixed, zIndex }}>
      <Box className={cx(classes.root, className)} ref={ref} {...others}>
        {header}

        <div className={classes.body}>
          {navbar}
          <main className={classes.main}>{children}</main>
          {aside}
        </div>

        {footer}
      </Box>
    </AppShellProvider>
  );
});

AppShell.displayName = '@pattern-ui/core/AppShell';

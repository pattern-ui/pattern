import React, { forwardRef } from 'react';
import { DefaultProps, usePatternDefaultProps } from '@pattern-ui/styles';
import { Box } from '@pattern-ui/box';
import useStyles from './TypographyStylesProvider.styles';

export interface TypographyStylesProviderProps
  extends DefaultProps,
    React.ComponentPropsWithoutRef<'div'> {
  /** Render any content to add Pattern typography styles */
  children: React.ReactNode;
}

export const TypographyStylesProvider = forwardRef<HTMLDivElement, TypographyStylesProviderProps>(
  (props: TypographyStylesProviderProps, ref) => {
    const { className, ...others } = usePatternDefaultProps('TypographyStylesProvider', {}, props);
    const { classes, cx } = useStyles(null, { name: 'TypographyStylesProvider' });
    return <Box className={cx(classes.root, className)} ref={ref} {...others} />;
  }
);

TypographyStylesProvider.displayName = '@pattern-ui/core/TypographyStylesProvider';

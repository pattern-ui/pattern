import React from 'react';
import {
  DefaultProps,
  PatternNumberSize,
  PatternColor,
  PatternTheme,
  usePatternTheme,
  usePatternDefaultProps,
} from '@pattern-ui/styles';
import { Box } from '@pattern-ui/box';
import { Bars } from './loaders/Bars';
import { Oval } from './loaders/Oval';
import { Dots } from './loaders/Dots';

const LOADERS = {
  bars: Bars,
  oval: Oval,
  dots: Dots,
} as const;

export const LOADER_SIZES = {
  xs: 18,
  sm: 22,
  md: 36,
  lg: 44,
  xl: 58,
};

export interface LoaderProps extends DefaultProps, React.ComponentPropsWithoutRef<'svg'> {
  /** Defines width of loader */
  size?: PatternNumberSize;

  /** Loader color from theme */
  color?: PatternColor;

  /** Loader appearance */
  variant?: PatternTheme['loader'];
}

const defaultProps: Partial<LoaderProps> = {
  size: 'md',
};

export function Loader(props: LoaderProps) {
  const {
    size = 'md',
    color,
    variant,
    ...others
  } = usePatternDefaultProps('Loader', defaultProps, props);

  const theme = usePatternTheme();
  const defaultLoader = variant in LOADERS ? variant : theme.loader;
  const _color = color || theme.primaryColor;

  return (
    <Box
      role="presentation"
      component={LOADERS[defaultLoader] || LOADERS.bars}
      size={theme.fn.size({ size, sizes: LOADER_SIZES })}
      color={
        _color in theme.colors
          ? theme.fn.themeColor(
              _color,
              theme.colorScheme === 'dark' ? 4 : theme.fn.primaryShade('light')
            )
          : color
      }
      {...others}
    />
  );
}

Loader.displayName = '@pattern-ui/core/Loader';

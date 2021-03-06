import type { PatternColor, PatternGradient, PatternThemeBase } from '../../../types';
import { rgba } from '../rgba/rgba';
import { themeColor } from '../theme-color/theme-color';
import { primaryShade } from '../primary-shade/primary-shade';
import { darken } from '../darken/darken';

export interface VariantInput {
  variant: 'filled' | 'light' | 'outline' | 'default' | 'gradient' | 'white' | 'subtle';
  color?: PatternColor;
  gradient?: PatternGradient;
}

export interface VariantOutput {
  border: string;
  background: string;
  color: string;
  hover: string;
  active: string;
}

const DEFAULT_GRADIENT = {
  from: 'indigo',
  to: 'cyan',
  deg: 45,
};

export function variant(theme: PatternThemeBase) {
  const getThemeColor = themeColor(theme);
  const getPrimaryShade = primaryShade(theme);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  return ({ variant, color, gradient }: VariantInput): VariantOutput => {
    if (variant === 'light') {
      return {
        border: 'transparent',
        background: rgba(
          getThemeColor(color, theme.colorScheme === 'dark' ? 8 : 0),
          theme.colorScheme === 'dark' ? 0.35 : 1
        ),
        color:
          color === 'dark'
            ? theme.colorScheme === 'dark'
              ? theme.colors.dark[0]
              : theme.colors.dark[9]
            : getThemeColor(color, theme.colorScheme === 'dark' ? 2 : getPrimaryShade('light')),
        hover: rgba(
          getThemeColor(color, theme.colorScheme === 'dark' ? 7 : 1),
          theme.colorScheme === 'dark' ? 0.45 : 0.65
        ),
        active: rgba(
          getThemeColor(color, theme.colorScheme === 'dark' ? 7 : 1),
          theme.colorScheme === 'dark' ? 0.25 : 0.85
        ),
      };
    }

    if (variant === 'default') {
      return {
        border: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[4],
        background: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        hover: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[0],
        active:
          theme.colorScheme === 'dark' ? theme.colors.dark[5] : darken(theme.colors.gray[0], 0.02),
      };
    }

    if (variant === 'white') {
      return {
        border: 'transparent',
        background: theme.white,
        color: getThemeColor(color, getPrimaryShade()),
        hover: null,
        active: null,
      };
    }

    if (variant === 'outline') {
      return {
        border: getThemeColor(color, theme.colorScheme === 'dark' ? 4 : getPrimaryShade('light')),
        background: 'transparent',
        color: getThemeColor(color, theme.colorScheme === 'dark' ? 4 : getPrimaryShade('light')),
        hover:
          theme.colorScheme === 'dark'
            ? rgba(getThemeColor(color, 4), 0.05)
            : rgba(getThemeColor(color, 0), 0.35),
        active:
          theme.colorScheme === 'dark'
            ? rgba(getThemeColor(color, 4), 0.25)
            : rgba(getThemeColor(color, 0), 0.55),
      };
    }

    if (variant === 'gradient') {
      const merged = {
        from: gradient?.from || DEFAULT_GRADIENT.from,
        to: gradient?.to || DEFAULT_GRADIENT.to,
        deg: gradient?.deg || DEFAULT_GRADIENT.deg,
      };

      return {
        background: `linear-gradient(${merged.deg}deg, ${getThemeColor(
          merged.from,
          getPrimaryShade(),
          false
        )} 0%, ${getThemeColor(merged.to, getPrimaryShade(), false)} 100%)`,
        color: theme.white,
        border: 'transparent',
        hover: null,
        active: null,
      };
    }

    if (variant === 'subtle') {
      return {
        border: 'transparent',
        background: 'transparent',
        color:
          color === 'dark'
            ? theme.colorScheme === 'dark'
              ? theme.colors.dark[0]
              : theme.colors.dark[9]
            : getThemeColor(color, theme.colorScheme === 'dark' ? 2 : getPrimaryShade('light')),
        hover: rgba(
          getThemeColor(color, theme.colorScheme === 'dark' ? 8 : 0),
          theme.colorScheme === 'dark' ? 0.35 : 1
        ),
        active: rgba(
          getThemeColor(color, theme.colorScheme === 'dark' ? 8 : 0),
          theme.colorScheme === 'dark' ? 0.15 : 0.55
        ),
      };
    }

    return {
      border: 'transparent',
      background: getThemeColor(color, getPrimaryShade()),
      color: theme.white,
      hover: getThemeColor(color, getPrimaryShade() === 9 ? 8 : getPrimaryShade() + 1),
      active: rgba(
        getThemeColor(color, getPrimaryShade() === 9 ? 8 : getPrimaryShade() + 1),
        theme.colorScheme === 'dark' ? 0.85 : 0.85
      ),
    };
  };
}

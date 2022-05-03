import {
  createStyles,
  CSSObject,
  PatternColor,
  PatternNumberSize,
  PatternTheme,
} from '@pattern/styles';

export interface TooltipStylesParams {
  color: PatternColor;
  radius: PatternNumberSize;
  width: number | 'auto';
  multiline: boolean;
}

function getColors(theme: PatternTheme, color?: PatternColor): CSSObject {
  if (!color) {
    return {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[9],
      color: theme.white,
    };
  }

  const colors = theme.fn.variant({ variant: 'filled', color });

  return {
    backgroundColor: colors.background,
    color: colors.color,
  };
}

export default createStyles((theme, { color, radius, width, multiline }: TooltipStylesParams) => ({
  root: {
    ...theme.fn.fontStyles(),
    ...getColors(theme, color),
    lineHeight: theme.lineHeight,
    fontSize: theme.fontSizes.sm,
    borderRadius: theme.fn.radius(radius),
    padding: `${theme.spacing.xs / 2}px ${theme.spacing.xs}px`,
    position: 'absolute',
    whiteSpace: multiline ? 'unset' : 'nowrap',
    pointerEvents: 'none',
    width,
  },

  arrow: {
    backgroundColor: 'inherit',
    border: 0,
    zIndex: 1,
  },
}));

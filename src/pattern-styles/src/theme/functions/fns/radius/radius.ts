import type { PatternThemeBase, PatternNumberSize } from '../../../types';

export function radius(theme: PatternThemeBase) {
  return (size: PatternNumberSize | (string & {})): string | number => {
    if (typeof size === 'number') {
      return size;
    }

    const defaultRadius =
      typeof theme.defaultRadius === 'number'
        ? theme.defaultRadius
        : theme.radius[theme.defaultRadius] || theme.defaultRadius;

    return theme.radius[size] || size || defaultRadius;
  };
}

import type { PatternThemeBase } from '../../../types';

export function primaryShade(theme: PatternThemeBase) {
  return (colorScheme?: 'light' | 'dark') => {
    if (typeof theme.primaryShade === 'number') {
      return theme.primaryShade;
    }

    return theme.primaryShade[colorScheme || theme.colorScheme];
  };
}

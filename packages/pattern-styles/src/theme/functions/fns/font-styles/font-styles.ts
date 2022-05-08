import type { PatternThemeBase } from '../../../types';
import type { CSSObject } from '../../../../tss';

export function fontStyles(theme: PatternThemeBase) {
  return (): CSSObject => ({ fontFamily: theme.fontFamily || 'sans-serif' });
}

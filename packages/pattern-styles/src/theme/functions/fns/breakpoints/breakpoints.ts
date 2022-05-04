import type { PatternThemeBase, PatternNumberSize } from '../../../types';
import { size } from '../size/size';

export function largerThan(theme: PatternThemeBase) {
  return (breakpoint: PatternNumberSize) =>
    `@media (min-width: ${size({ size: breakpoint, sizes: theme.breakpoints }) + 1}px)`;
}

export function smallerThan(theme: PatternThemeBase) {
  return (breakpoint: PatternNumberSize) =>
    `@media (max-width: ${size({ size: breakpoint, sizes: theme.breakpoints })}px)`;
}

import { PatternSize, PatternTheme } from '@pattern-ui/styles';

type Breakpoints<T> = Partial<Record<PatternSize | (string & {}), T>>;

export function getSortedBreakpoints<T>(
  breakpoints: Breakpoints<T>,
  theme: PatternTheme
): [number, T][] {
  if (!breakpoints) {
    return [];
  }

  const values = Object.keys(breakpoints)
    .filter((breakpoint) => breakpoint !== 'base')
    .map((breakpoint) => [
      theme.fn.size({ size: breakpoint, sizes: theme.breakpoints }),
      breakpoints[breakpoint],
    ]);

  values.sort((a, b) => a[0] - b[0]);
  return values as [number, T][];
}

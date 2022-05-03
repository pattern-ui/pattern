import {
  CSSObject,
  PatternStyleSystemProps,
  PatternTheme,
  useCss,
  usePatternTheme,
} from '@pattern/styles';
import { getSystemStyles } from './get-system-styles/get-system-styles';

type Sx = CSSObject | ((theme: PatternTheme) => CSSObject);
export type BoxSx = Sx | Sx[];

function extractSx(sx: Sx, theme: PatternTheme) {
  return typeof sx === 'function' ? sx(theme) : sx;
}

export function useSx(sx: BoxSx, systemProps: PatternStyleSystemProps, className: string) {
  const theme = usePatternTheme();
  const { css, cx } = useCss();

  if (Array.isArray(sx)) {
    return cx(
      className,
      css(getSystemStyles(systemProps, theme)),
      sx.map((partial) => css(extractSx(partial, theme)))
    );
  }

  return cx(className, css(extractSx(sx, theme)), css(getSystemStyles(systemProps, theme)));
}

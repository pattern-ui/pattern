import type { CSSProperties } from 'react';
import type { CSSObject } from '../../tss';
import type { PatternStyleSystemProps } from './PatternStyleSystem';
import type { PatternTheme } from './PatternTheme';

export type Sx = CSSObject | ((theme: PatternTheme) => CSSObject);

export type ClassNames<StylesNames extends string> = Partial<Record<StylesNames, string>>;
export type Styles<StylesNames extends string, StylesParams extends Record<string, any> = never> =
  | Partial<Record<StylesNames, CSSObject>>
  | ((theme: PatternTheme, params: StylesParams) => Partial<Record<StylesNames, CSSObject>>);

export interface DefaultProps<
  StylesNames extends string = never,
  StylesParams extends Record<string, any> = never
> extends PatternStyleSystemProps {
  className?: string;
  style?: CSSProperties;
  sx?: Sx | Sx[];
  classNames?: ClassNames<StylesNames>;
  styles?: Styles<StylesNames, StylesParams>;
  unstyled?: boolean;
}

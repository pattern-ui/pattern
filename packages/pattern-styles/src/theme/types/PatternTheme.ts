import type { CSSProperties } from 'react';
import type { PatternSizes, PatternSize, PatternNumberSize } from './PatternSize';
import type { DeepPartial } from './DeepPartial';
import type { PatternThemeColors } from './PatternColor';
import type { VariantInput, VariantOutput } from '../functions/fns/variant/variant';
import type { ColorScheme } from './ColorScheme';
import { CSSObject } from '../../tss';

export type LoaderType = 'bars' | 'oval' | 'dots';
export type PatternThemeOther = Record<string, any>;

export interface HeadingStyle {
  fontSize: CSSProperties['fontSize'];
  lineHeight: CSSProperties['lineHeight'];
}

type Shade = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface PatternPrimaryShade {
  light: Shade;
  dark: Shade;
}

interface PatternThemeFunctions {
  fontStyles(): any;
  focusStyles(): any;
  cover(offset?: number | string): any;
  themeColor(color: string, shade: number, primaryFallback?: boolean): string;
  rgba(color: string, alpha: number): string;
  size(props: { size: string | number; sizes: Record<string, any> }): any;
  linearGradient(deg: number, ...colors: string[]): string;
  radialGradient(...colors: string[]): string;
  smallerThan(breakpoint: PatternNumberSize): string;
  largerThan(breakpoint: PatternNumberSize): string;
  lighten(color: string, alpha: number): string;
  darken(color: string, alpha: number): string;
  radius(size: PatternNumberSize | (string & {})): string | number;
  variant(payload: VariantInput): VariantOutput;
  primaryShade(colorScheme?: ColorScheme): Shade;
  hover(hoverStyle: CSSObject): any;
}

export interface PatternTheme {
  dir: 'ltr' | 'rtl';
  primaryShade: Shade | PatternPrimaryShade;
  focusRing: 'auto' | 'always' | 'never';
  defaultRadius: PatternNumberSize | (string & {});
  loader: LoaderType;
  dateFormat: string;
  colorScheme: ColorScheme;
  white: string;
  black: string;
  colors: PatternThemeColors;
  fontFamily: CSSProperties['fontFamily'];
  lineHeight: CSSProperties['lineHeight'];
  transitionTimingFunction: CSSProperties['transitionTimingFunction'];
  fontFamilyMonospace: CSSProperties['fontFamily'];
  primaryColor: keyof PatternThemeColors;

  fontSizes: PatternSizes;
  radius: PatternSizes;
  spacing: PatternSizes;
  breakpoints: PatternSizes;
  shadows: Record<PatternSize, string>;

  headings: {
    fontFamily: CSSProperties['fontFamily'];
    fontWeight: CSSProperties['fontWeight'];
    sizes: {
      h1: HeadingStyle;
      h2: HeadingStyle;
      h3: HeadingStyle;
      h4: HeadingStyle;
      h5: HeadingStyle;
      h6: HeadingStyle;
    };
  };

  fn: PatternThemeFunctions;
  other: PatternThemeOther;

  datesLocale: string;
}

export type PatternThemeBase = Omit<PatternTheme, 'fn'>;
export type PatternThemeOverride = DeepPartial<Omit<PatternThemeBase, 'fn' | 'other'>> & {
  other?: PatternThemeOther;
};

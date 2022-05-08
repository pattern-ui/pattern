import { Tuple } from './Tuple';

export type DefaultPatternColor =
  | 'dark'
  | 'gray'
  | 'red'
  | 'pink'
  | 'grape'
  | 'violet'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'green'
  | 'lime'
  | 'yellow'
  | 'orange'
  | 'teal'
  | (string & {});

export type PatternThemeColorsOverride = Record<string, any>;

export type PatternThemeColors = PatternThemeColorsOverride extends {
  colors: Record<string, Tuple<string, 10>>;
}
  ? PatternThemeColorsOverride['colors']
  : Record<DefaultPatternColor, Tuple<string, 10>>;

export type PatternColor = keyof PatternThemeColors;

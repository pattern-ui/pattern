import type { PatternNumberSize } from './PatternSize';

type PatternStyleSystemValue = PatternNumberSize | (string & {});

export interface PatternStyleSystemProps {
  m?: PatternStyleSystemValue;
  my?: PatternStyleSystemValue;
  mx?: PatternStyleSystemValue;
  mt?: PatternStyleSystemValue;
  mb?: PatternStyleSystemValue;
  ml?: PatternStyleSystemValue;
  mr?: PatternStyleSystemValue;

  p?: PatternStyleSystemValue;
  py?: PatternStyleSystemValue;
  px?: PatternStyleSystemValue;
  pt?: PatternStyleSystemValue;
  pb?: PatternStyleSystemValue;
  pl?: PatternStyleSystemValue;
  pr?: PatternStyleSystemValue;
}

export type PatternStyleSystemSize = keyof PatternStyleSystemProps;

import React from 'react';
import { Global as EmotionGlobal, css, CSSObject } from '@emotion/react';
import { usePatternTheme } from '../theme/PatternProvider';
import type { PatternTheme } from '../theme/types';

type EmotionStyles = CSSObject | CSSObject[];

interface GlobalStylesProps {
  styles: EmotionStyles | ((theme: PatternTheme) => EmotionStyles);
}

export function Global({ styles }: GlobalStylesProps) {
  const theme = usePatternTheme();
  return <EmotionGlobal styles={css(typeof styles === 'function' ? styles(theme) : styles)} />;
}

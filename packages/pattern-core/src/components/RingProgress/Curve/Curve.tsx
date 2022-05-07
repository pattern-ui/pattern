import React from 'react';
import { usePatternTheme, PatternColor } from '@pattern-ui/styles';
import { getCurveProps } from './get-curve-props';

interface CurveProps {
  value?: number;
  size: number;
  offset: number;
  sum: number;
  thickness: number;
  lineRoundCaps: boolean;
  root?: boolean;
  color?: PatternColor;
}

export function Curve({
  size,
  value,
  offset,
  sum,
  thickness,
  root,
  color,
  lineRoundCaps,
}: CurveProps) {
  const theme = usePatternTheme();
  const stroke = theme.fn.themeColor(
    color || (theme.colorScheme === 'dark' ? 'dark' : 'gray'),
    color ? theme.fn.primaryShade() : theme.colorScheme === 'dark' ? 4 : 1,
    false
  );

  return (
    <circle
      fill="none"
      strokeLinecap={lineRoundCaps ? 'round' : 'butt'}
      stroke={stroke}
      {...getCurveProps({ sum, size, thickness, value, offset, root })}
    />
  );
}

Curve.displayName = '@pattern-ui/core/Curve';

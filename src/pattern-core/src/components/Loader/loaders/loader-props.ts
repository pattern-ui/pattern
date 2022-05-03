import React from 'react';
import type { PatternColor } from '@pattern/styles';

export interface LoaderProps extends React.ComponentPropsWithoutRef<'svg'> {
  size: number;
  color: PatternColor;
}

import React from 'react';
import { Global } from '@emotion/react';
import type { PatternTheme, PatternSize } from './types';

function assignSizeVariables(
  variables: Record<string, string>,
  sizes: Record<PatternSize, number | string>,
  name: string
) {
  Object.keys(sizes).forEach((size) => {
    // eslint-disable-next-line no-param-reassign
    variables[`--pattern-${name}-${size}`] =
      typeof sizes[size] === 'number' ? `${sizes[size]}px` : sizes[size];
  });
}

export function PatternCssVariables({ theme }: { theme: PatternTheme }) {
  const variables: Record<string, string> = {
    '--pattern-color-white': theme.white,
    '--pattern-color-black': theme.black,
    '--pattern-transition-timing-function': theme.transitionTimingFunction,
    '--pattern-line-height': `${theme.lineHeight}`,
    '--pattern-font-family': theme.fontFamily,
    '--pattern-font-family-monospace': theme.fontFamilyMonospace,
    '--pattern-font-family-headings': theme.headings.fontFamily,
    '--pattern-heading-font-weight': `${theme.headings.fontWeight}`,
  };

  assignSizeVariables(variables, theme.shadows, 'shadow');
  assignSizeVariables(variables, theme.fontSizes, 'font-size');
  assignSizeVariables(variables, theme.radius, 'radius');
  assignSizeVariables(variables, theme.spacing, 'spacing');

  Object.keys(theme.colors).forEach((color) => {
    theme.colors[color].forEach((shade, index) => {
      variables[`--pattern-color-${color}-${index}`] = shade;
    });
  });

  const headings = theme.headings.sizes;

  Object.keys(headings).forEach((heading) => {
    variables[`--pattern-${heading}-font-size`] = `${headings[heading].fontSize}px`;
    variables[`--pattern-${heading}-line-height`] = `${headings[heading].lineHeight}`;
  });

  return (
    <Global
      styles={{
        ':root': variables,
      }}
    />
  );
}

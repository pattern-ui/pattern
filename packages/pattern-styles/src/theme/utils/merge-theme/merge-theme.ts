import { PatternThemeOverride, PatternThemeBase, PatternTheme } from '../../types';
import { attachFunctions } from '../../functions/attach-functions';

export function mergeTheme(
  currentTheme: PatternThemeBase,
  themeOverride?: PatternThemeOverride
): PatternThemeBase {
  if (!themeOverride) {
    return currentTheme;
  }

  // @ts-ignore
  return Object.keys(currentTheme).reduce((acc, key) => {
    if (key === 'headings' && themeOverride.headings) {
      const sizes = themeOverride.headings.sizes
        ? Object.keys(currentTheme.headings.sizes).reduce((headingsAcc, h) => {
            // eslint-disable-next-line no-param-reassign
            headingsAcc[h] = {
              ...currentTheme.headings.sizes[h],
              ...themeOverride.headings.sizes[h],
            };
            return headingsAcc;
          }, {} as PatternThemeBase['headings']['sizes'])
        : currentTheme.headings.sizes;
      return {
        ...acc,
        headings: {
          ...currentTheme.headings,
          ...themeOverride.headings,
          sizes,
        },
      };
    }

    acc[key] =
      typeof themeOverride[key] === 'object'
        ? { ...currentTheme[key], ...themeOverride[key] }
        : typeof themeOverride[key] === 'number'
        ? themeOverride[key]
        : themeOverride[key] || currentTheme[key];
    return acc;
  }, {} as PatternThemeBase);
}

export function mergeThemeWithFunctions(
  currentTheme: PatternThemeBase,
  themeOverride?: PatternThemeOverride
): PatternTheme {
  return attachFunctions(mergeTheme(currentTheme, themeOverride));
}

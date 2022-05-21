import React, { createContext, useContext } from 'react';
import type { Options as EmotionCacheOptions } from '@emotion/cache';
import type { CSSObject } from '../tss';
import { DEFAULT_THEME } from './default-theme';
import { GlobalStyles } from './GlobalStyles';
import { PatternCssVariables } from './PatternCssVariables';
import type { PatternThemeOverride, PatternTheme } from './types';
import { mergeThemeWithFunctions } from './utils/merge-theme/merge-theme';
import { filterProps } from './utils/filter-props/filter-props';
import { NormalizeCSS } from './NormalizeCSS';

type ProviderStyles = Record<
  string,
  Record<string, CSSObject> | ((theme: PatternTheme, params: any) => Record<string, CSSObject>)
>;

type ProviderClassNames = Record<string, Record<string, string>>;
type PatternDefaultProps = Record<string, Record<string, any>>;

interface PatternProviderContextType {
  theme: PatternTheme;
  styles: ProviderStyles;
  classNames: ProviderClassNames;
  emotionOptions: EmotionCacheOptions;
  defaultProps: PatternDefaultProps;
}

const PatternProviderContext = createContext<PatternProviderContextType>({
  theme: DEFAULT_THEME,
  styles: {},
  classNames: {},
  emotionOptions: { key: 'pattern', prepend: true },
  defaultProps: {},
});

export function usePatternTheme() {
  return useContext(PatternProviderContext)?.theme || DEFAULT_THEME;
}

export function usePatternThemeStyles(component: string) {
  const ctx = useContext(PatternProviderContext);
  return { styles: ctx.styles[component] || {}, classNames: ctx.classNames[component] || {} };
}

export function usePatternEmotionOptions(): EmotionCacheOptions {
  return useContext(PatternProviderContext)?.emotionOptions || { key: 'pattern', prepend: true };
}

export function usePatternDefaultProps<T extends Record<string, any>>(
  component: string,
  defaultProps: Partial<T>,
  props: T
): T {
  const contextProps = useContext(PatternProviderContext)?.defaultProps?.[component] || {};
  return { ...defaultProps, ...contextProps, ...filterProps(props) };
}

export interface PatternProviderProps {
  theme?: PatternThemeOverride;
  styles?: ProviderStyles;
  classNames?: ProviderClassNames;
  defaultProps?: PatternDefaultProps;
  emotionOptions?: EmotionCacheOptions;
  withNormalizeCSS?: boolean;
  withGlobalStyles?: boolean;
  withCSSVariables?: boolean;
  children: React.ReactNode;
  inherit?: boolean;
}

export function PatternProvider({
  theme,
  styles = {},
  classNames = {},
  defaultProps = {},
  emotionOptions,
  withNormalizeCSS = false,
  withGlobalStyles = false,
  withCSSVariables = false,
  inherit = false,
  children,
}: PatternProviderProps) {
  const ctx = useContext(PatternProviderContext);
  const overrides = {
    themeOverride: inherit ? { ...ctx.theme, ...theme } : theme,
    emotionOptions: inherit ? { ...ctx.emotionOptions, ...emotionOptions } : emotionOptions,
    styles: inherit ? { ...ctx.styles, ...styles } : styles,
    classNames: inherit ? { ...ctx.classNames, ...classNames } : classNames,
    defaultProps: inherit ? { ...ctx.defaultProps, ...defaultProps } : defaultProps,
  };

  const mergedTheme = mergeThemeWithFunctions(DEFAULT_THEME, overrides.themeOverride);

  return (
    <PatternProviderContext.Provider
      value={{
        theme: mergedTheme,
        styles: overrides.styles,
        classNames: overrides.classNames,
        emotionOptions: overrides.emotionOptions,
        defaultProps: overrides.defaultProps,
      }}
    >
      {withNormalizeCSS && <NormalizeCSS />}
      {withGlobalStyles && <GlobalStyles theme={mergedTheme} />}
      {withCSSVariables && <PatternCssVariables theme={mergedTheme} />}
      {children}
    </PatternProviderContext.Provider>
  );
}

PatternProvider.displayName = '@pattern-ui/core/PatternProvider';

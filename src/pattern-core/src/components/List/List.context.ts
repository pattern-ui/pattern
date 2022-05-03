import { createContext, useContext } from 'react';
import { CSSObject, PatternNumberSize, PatternTheme } from '@pattern/styles';
import type { ListItemStylesNames } from './ListItem/ListItem';

interface ListContextValue {
  classNames?: Partial<Record<ListItemStylesNames, string>>;
  styles?:
    | Partial<Record<ListItemStylesNames, CSSObject>>
    | ((theme: PatternTheme) => Partial<Record<ListItemStylesNames, CSSObject>>);
  spacing?: PatternNumberSize;
  center?: boolean;
  icon?: React.ReactNode;
}

export const ListContext = createContext<ListContextValue>(null);

export function useListContext(): ListContextValue {
  return useContext(ListContext) || {};
}

import { PatternNumberSize, PatternTheme, CSSObject } from '@pattern-ui/styles';
import { createUseContext } from '@pattern-ui/utils';
import type { MenuStylesNames } from './Menu';

interface MenuContextValue {
  hovered: number;
  radius: PatternNumberSize;
  classNames: Partial<Record<MenuStylesNames, string>>;
  styles:
    | Partial<Record<MenuStylesNames, CSSObject>>
    | ((theme: PatternTheme) => Partial<Record<MenuStylesNames, CSSObject>>);
  onItemHover(index: number): void;
  onItemKeyDown(event: React.KeyboardEvent<HTMLElement>): void;
  onItemClick(): void;
}

export const [MenuProvider, useMenuContext] = createUseContext<MenuContextValue>(null);

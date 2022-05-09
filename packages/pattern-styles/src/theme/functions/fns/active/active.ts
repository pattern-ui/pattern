import type { CSSObject } from '../../../../tss';

export function active(activeStyle: CSSObject) {
  return {
    '&:active': activeStyle,
  };
}

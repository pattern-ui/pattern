import type { PatternNumberSize } from '@pattern-ui/styles';
import { createUseContext } from '@pattern-ui/utils';

interface GridContextValue {
  gutter: PatternNumberSize;
  grow: boolean;
  columns: number;
}

export const [GridProvider, useGridContext] = createUseContext<GridContextValue>(null);

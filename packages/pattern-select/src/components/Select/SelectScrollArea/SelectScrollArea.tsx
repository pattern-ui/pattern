import React, { forwardRef } from 'react';
import { ScrollArea, ScrollAreaProps } from '@pattern-ui/scroll-area';

export const SelectScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ style, ...others }: ScrollAreaProps, ref) => (
    <ScrollArea {...others} style={{ width: '100%', ...style }} viewportRef={ref}>
      {others.children}
    </ScrollArea>
  )
);

SelectScrollArea.displayName = '@pattern-ui/core/SelectScrollArea';

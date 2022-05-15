import React, { cloneElement } from 'react';
import { isElement } from '@pattern-ui/utils';
import { Popover, PopoverTargetProps } from '@pattern-ui/popover';
import { useHoverCardContext } from '../HoverCard.context';
import { HOVER_CARD_ERRORS } from '../HoverCard.errors';

export function HoverCardTarget({ children, refProp }: PopoverTargetProps) {
  if (!isElement(children)) {
    throw new Error(HOVER_CARD_ERRORS['popover-children']);
  }

  const ctx = useHoverCardContext();
  const target = children as React.ReactElement;

  const onMouseEnter = (event: React.MouseEvent<any>) => {
    target.props.onMouseEnter?.(event);
    ctx.openDropdown();
  };

  const onMouseLeave = (event: React.MouseEvent<any>) => {
    target.props.onMouseLeave?.(event);
    ctx.closeDropdown();
  };

  return (
    <Popover.Target refProp={refProp}>
      {cloneElement(children as React.ReactElement, { onMouseEnter, onMouseLeave })}
    </Popover.Target>
  );
}

HoverCardTarget.displayName = '@pattern-ui/core/HoverCardTarget';

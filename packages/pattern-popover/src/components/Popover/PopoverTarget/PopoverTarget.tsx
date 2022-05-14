import React, { cloneElement } from 'react';
import { useMergedRef } from '@pattern-ui/hooks';
import { isElement } from '@pattern-ui/utils';
import { usePopoverContext } from '../Popover.context';
import { POPOVER_ERRORS } from '../Popover.errors';

export interface PopoverTargetProps {
  /** Target element */
  children: React.ReactNode;

  /** Key of the prop that should be used to get element ref */
  refProp?: string;
}

export function PopoverTarget({ children, refProp = 'ref' }: PopoverTargetProps) {
  if (!isElement(children)) {
    throw new Error(POPOVER_ERRORS['popover-children']);
  }

  const ctx = usePopoverContext();
  const target = children as React.ReactElement;
  const targetRef = useMergedRef(ctx.reference, (target as any).ref);

  return cloneElement(target, {
    [refProp]: targetRef,
    'aria-haspopup': 'dialog',
    'aria-expanded': ctx.opened,
    'aria-controls': ctx.getDropdownId(),
    id: ctx.getTargetId(),
    ...(!ctx.controlled ? { onClick: ctx.onToggle } : null),
  });
}

PopoverTarget.displayName = '@pattern-ui/core/PopoverTarget';

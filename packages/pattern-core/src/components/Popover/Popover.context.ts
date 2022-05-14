import { Placement, ReferenceType } from '@floating-ui/react-dom-interactions';
import { createSafeContext } from '@pattern-ui/utils';
import { PatternNumberSize, PatternShadow } from '@pattern-ui/styles';
import { PatternTransition } from '@pattern-ui/transition';
import { POPOVER_ERRORS } from './Popover.errors';
import { PopoverWidth } from './Popover.types';

interface PopoverContext {
  x: number;
  y: number;
  opened: boolean;
  transition: PatternTransition;
  transitionDuration: number;
  reference: (node: ReferenceType) => void;
  floating: (node: HTMLElement) => void;
  width?: PopoverWidth;
  withArrow: boolean;
  arrowSize: number;
  arrowOffset: number;
  trapFocus: boolean;
  placement: Placement;
  withinPortal: boolean;
  closeOnEscape: boolean;
  zIndex: React.CSSProperties['zIndex'];
  radius?: PatternNumberSize;
  shadow?: PatternShadow;
  onClose?(): void;
  getDropdownId(): string;
  getTargetId(): string;
  controlled: boolean;
  onToggle(): void;
}

export const [PopoverContextProvider, usePopoverContext] = createSafeContext<PopoverContext>(
  POPOVER_ERRORS['popover-context']
);

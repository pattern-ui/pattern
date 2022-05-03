import { createSafeContext } from '@pattern/utils';
import { HOVER_CARD_ERRORS } from './HoverCard.errors';

interface HoverCardContext {
  openDropdown(): void;
  closeDropdown(): void;
}

export const [HoverCardContextProvider, useHoverCardContext] = createSafeContext<HoverCardContext>(
  HOVER_CARD_ERRORS['hover-card-context']
);

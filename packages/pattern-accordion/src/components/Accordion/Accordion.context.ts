import { PatternNumberSize } from '@pattern-ui/styles';
import { createSafeContext } from '@pattern-ui/utils';
import { ACCORDION_ERRORS } from './Accordion.errors';
import {
  AccordionChevronPosition,
  AccordionHeadingOrder,
  AccordionVariant,
} from './Accordion.types';

interface AccordionContext {
  loop: boolean;
  transitionDuration: number;
  disableChevronRotation: boolean;
  chevronPosition: AccordionChevronPosition;
  chevronSize: number;
  order: AccordionHeadingOrder;
  chevron: React.ReactNode;
  variant: AccordionVariant;
  radius: PatternNumberSize;
  onChange(value: string): void;
  isItemActive(value: string): boolean;
  getControlId(value: string): string;
  getRegionId(value: string): string;
}

export const [AccordionContextProvider, useAccordionContext] = createSafeContext<AccordionContext>(
  ACCORDION_ERRORS['accordion-context']
);

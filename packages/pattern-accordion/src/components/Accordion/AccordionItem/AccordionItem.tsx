import React, { forwardRef } from 'react';
import { DefaultProps, Selectors, useContextStylesApi } from '@pattern-ui/styles';
import { Box } from '@pattern-ui/box';
import { AccordionItemContextProvider } from '../AccordionItem.context';
import { useAccordionContext } from '../Accordion.context';
import useStyles from './AccordionItem.styles';

export type AccordionItemStylesNames = Selectors<typeof useStyles>;

export interface AccordionItemProps
  extends DefaultProps<AccordionItemStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Value that is used to manage accordion state */
  value: string;
}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, className, value, ...others }, ref) => {
    const { classNames, styles, unstyled } = useContextStylesApi();
    const ctx = useAccordionContext();
    const { classes, cx } = useStyles(
      { variant: ctx.variant, radius: ctx.radius },
      { name: 'Accordion', classNames, styles, unstyled }
    );

    return (
      <AccordionItemContextProvider value={{ value }}>
        <Box
          ref={ref}
          className={cx(classes.item, className)}
          data-active={ctx.isItemActive(value) || undefined}
          {...others}
        >
          {children}
        </Box>
      </AccordionItemContextProvider>
    );
  }
);

AccordionItem.displayName = '@pattern-ui/core/AccordionItem';

import React from 'react';
import { DefaultProps, usePatternDefaultProps, StylesApiProvider } from '@pattern-ui/styles';
import { Box } from '@pattern-ui/box';
import { AccordionProviderProps, AccordionProvider } from './AccordionProvider';
import { AccordionItem, AccordionItemStylesNames } from './AccordionItem/AccordionItem';
import { AccordionControl, AccordionControlStylesNames } from './AccordionControl/AccordionControl';
import { AccordionPanel, AccordionPanelStylesNames } from './AccordionPanel/AccordionPanel';
import { ChevronIcon } from './ChevronIcon';
import { AccordionStylesParams } from './Accordion.types';

export type AccordionStylesNames =
  | AccordionItemStylesNames
  | AccordionPanelStylesNames
  | AccordionControlStylesNames;

export interface AccordionProps<Multiple extends boolean = false>
  extends AccordionProviderProps<Multiple>,
    DefaultProps<AccordionStylesNames, AccordionStylesParams>,
    Omit<React.ComponentPropsWithoutRef<'div'>, keyof AccordionProviderProps<Multiple>> {}

const defaultProps: Partial<AccordionProps> = {
  multiple: false,
  disableChevronRotation: false,
  transitionDuration: 200,
  chevronPosition: 'right',
  variant: 'default',
  chevronSize: 24,
  chevron: <ChevronIcon />,
};

export function Accordion<Multiple extends boolean = false>(props: AccordionProps<Multiple>) {
  const {
    id,
    loop,
    children,
    multiple,
    value,
    defaultValue,
    onChange,
    transitionDuration,
    disableChevronRotation,
    chevronPosition,
    chevronSize,
    order,
    chevron,
    classNames,
    styles,
    unstyled,
    variant,
    radius,
    ...others
  } = usePatternDefaultProps<AccordionProps<Multiple>>(
    'Accordion',
    defaultProps as AccordionProps<Multiple>,
    props
  );

  return (
    <AccordionProvider
      id={id}
      multiple={multiple}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      loop={loop}
      transitionDuration={transitionDuration}
      disableChevronRotation={disableChevronRotation}
      chevronPosition={chevronPosition}
      chevronSize={chevronSize}
      order={order}
      chevron={chevron}
      variant={variant}
      radius={radius}
    >
      <StylesApiProvider classNames={classNames} styles={styles} unstyled={unstyled}>
        <Box {...others} data-accordion>
          {children}
        </Box>
      </StylesApiProvider>
    </AccordionProvider>
  );
}

Accordion.Item = AccordionItem;
Accordion.Control = AccordionControl;
Accordion.Panel = AccordionPanel;
Accordion.displayName = '@pattern-ui/core/Accordion';

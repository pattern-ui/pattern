import React, { useRef, useState, forwardRef } from 'react';
import {
  DefaultProps,
  PatternSize,
  PatternShadow,
  Selectors,
  extractSystemStyles,
  getDefaultZIndex,
} from '@pattern-ui/styles';
import {
  useClickOutside,
  useFocusTrap,
  useMergedRef,
  useWindowEvent,
  useUuid,
} from '@pattern-ui/hooks';
import { InputWrapperStylesNames } from '@pattern-ui/input-wrapper';
import { Input, InputBaseProps, InputStylesNames } from '@pattern-ui/input';
import { Popper } from '@pattern-ui/popper';
import { Modal } from '@pattern-ui/modal';
import { PatternTransition } from '@pattern-ui/transition';
import { CloseButton } from '@pattern-ui/action-icon';
import { Paper } from '@pattern-ui/paper';
import { Box } from '@pattern-ui/box';
import { CalendarBaseStylesNames } from '../CalendarBase';
import useStyles from './DatePickerBase.styles';

export type DatePickerStylesNames =
  | Selectors<typeof useStyles>
  | CalendarBaseStylesNames
  | InputStylesNames
  | InputWrapperStylesNames;

export interface DatePickerBaseSharedProps
  extends InputBaseProps,
    DefaultProps<DatePickerStylesNames>,
    Omit<
      React.ComponentPropsWithoutRef<'input'>,
      'value' | 'defaultValue' | 'placeholder' | 'size'
    > {
  /** Props spread to root element (InputWrapper) */
  wrapperProps?: React.ComponentPropsWithoutRef<'div'>;

  /** Placeholder, displayed when date is not selected */
  placeholder?: string;

  /** Dropdown appear/disappear transition */
  transition?: PatternTransition;

  /** Dropdown appear/disappear transition duration */
  transitionDuration?: number;

  /** Dropdown appear/disappear transition timing function, defaults to theme.transitionTimingFunction */
  transitionTimingFunction?: string;

  /** Dropdown shadow from theme or css value for custom box-shadow */
  shadow?: PatternShadow;

  /** Input name, useful fon uncontrolled variant to capture data with native form */
  name?: string;

  /** Set to true to disable dropdown closing on scroll */
  closeDropdownOnScroll?: boolean;

  /** Input size */
  size?: PatternSize;

  /** Where to show calendar in modal or popover */
  dropdownType?: 'popover' | 'modal';

  /** Allow to clear value */
  clearable?: boolean;

  /** aria-label for clear button */
  clearButtonLabel?: string;

  /** useEffect dependencies to force update dropdown position */
  positionDependencies?: any[];

  /** Popper zIndex */
  zIndex?: number;

  /** call onChange with last valid value onBlur */
  fixOnBlur?: boolean;

  /** Whether to render the dropdown in a Portal */
  withinPortal?: boolean;

  /** Called when dropdown opens */
  onDropdownOpen?(): void;

  /** Called when dropdown closes */
  onDropdownClose?(): void;

  /** Events that should trigger outside clicks */
  clickOutsideEvents?: string[];

  /** Modal z-index */
  modalZIndex?: number;

  /** Set the clear button tab index to disabled or default after input field */
  clearButtonTabIndex?: -1 | 0;
}

export interface DatePickerBaseProps extends DatePickerBaseSharedProps {
  /** Internal prop to set input label */
  inputLabel?: string;

  /** Static css selector base */
  __staticSelector?: string;

  /** Controls dropdown opened state */
  dropdownOpened: boolean;

  /** Called when dropdown opened state changes */
  setDropdownOpened(opened: boolean): void;

  /** Called when clear button in clicked */
  onClear(): void;

  /** Allow free input */
  allowFreeInput?: boolean;

  /** Amount of months */
  amountOfMonths?: number;
}

const RIGHT_SECTION_WIDTH = {
  xs: 24,
  sm: 30,
  md: 34,
  lg: 40,
  xl: 44,
};

export const DatePickerBase = forwardRef<HTMLInputElement, DatePickerBaseProps>(
  (
    {
      classNames,
      className,
      style,
      styles,
      invalid,
      wrapperProps,
      required,
      allowFreeInput = false,
      id,
      placeholder,
      shadow = 'sm',
      transition = 'pop-top-left',
      transitionDuration = 200,
      transitionTimingFunction,
      closeDropdownOnScroll = false,
      size = 'sm',
      children,
      inputLabel,
      __staticSelector = 'DatePickerBase',
      dropdownOpened,
      setDropdownOpened,
      dropdownType = 'popover',
      clearable = true,
      clearButtonLabel,
      onClear,
      positionDependencies = [],
      zIndex = getDefaultZIndex('popover'),
      withinPortal = true,
      onBlur,
      onFocus,
      onChange,
      onKeyDown,
      name = 'date',
      sx,
      amountOfMonths = 1,
      onDropdownClose,
      onDropdownOpen,
      clickOutsideEvents = ['mousedown', 'touchstart'],
      modalZIndex,
      clearButtonTabIndex = 0,
      ...others
    }: DatePickerBaseProps,
    ref
  ) => {
    const { classes, cx, theme } = useStyles(
      { size, invalid },
      { classNames, styles, name: __staticSelector }
    );
    const { systemStyles, rest } = extractSystemStyles(others);
    const [dropdownElement, setDropdownElement] = useState<HTMLDivElement>(null);
    const [rootElement, setRootElement] = useState<HTMLDivElement>(null);
    const uuid = useUuid(id);

    const focusTrapRef = useFocusTrap(!allowFreeInput && dropdownOpened);
    const inputRef = useRef<HTMLButtonElement>();

    const closeDropdown = () => {
      setDropdownOpened(false);
      onDropdownClose?.();
    };

    const openDropdown = () => {
      setDropdownOpened(true);
      onDropdownOpen?.();
    };

    const toggleDropdown = () => {
      setDropdownOpened(!dropdownOpened);
      !dropdownOpened ? onDropdownOpen?.() : onDropdownClose?.();
    };

    const closeOnEscape = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.nativeEvent.code === 'Escape') {
        closeDropdown();
        window.setTimeout(() => inputRef.current?.focus(), 0);
      }
    };

    useClickOutside(
      () => dropdownType === 'popover' && !allowFreeInput && closeDropdown(),
      clickOutsideEvents,
      [dropdownElement, rootElement]
    );

    useWindowEvent('scroll', () => closeDropdownOnScroll && closeDropdown());

    const rightSection = clearable ? (
      <CloseButton
        variant="transparent"
        aria-label={clearButtonLabel}
        onClick={onClear}
        size={size}
        tabIndex={clearButtonTabIndex}
      />
    ) : null;

    const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      typeof onBlur === 'function' && onBlur(event);
      if (allowFreeInput) {
        closeDropdown();
      }
    };

    const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      typeof onFocus === 'function' && onFocus(event);
      if (allowFreeInput) {
        openDropdown();
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      typeof onKeyDown === 'function' && onKeyDown(event);
      if ((event.code === 'Space' || event.code === 'Enter') && !allowFreeInput) {
        event.preventDefault();
        openDropdown();
      }
    };

    return (
      <Box
        ref={setRootElement}
        id={`${uuid}-wrapper`}
        className={className}
        style={style}
        styles={styles}
        sx={sx}
        {...systemStyles}
        {...wrapperProps}
      >
        <div className={classes.wrapper}>
          <Input<'input'>
            classNames={{
              ...classNames,
              input: cx(classes.input, { [classes.freeInput]: allowFreeInput }, classNames?.input),
            }}
            styles={styles}
            onClick={() => (!allowFreeInput ? toggleDropdown() : openDropdown())}
            onKeyDown={handleKeyDown}
            id={uuid}
            ref={useMergedRef(ref, inputRef)}
            __staticSelector={__staticSelector}
            size={size}
            name={name}
            placeholder={placeholder}
            value={inputLabel}
            required={required}
            invalid={invalid}
            readOnly={!allowFreeInput}
            rightSection={rightSection}
            rightSectionWidth={theme.fn.size({ size, sizes: RIGHT_SECTION_WIDTH })}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            onChange={onChange}
            autoComplete="off"
            {...rest}
          />
        </div>

        {dropdownType === 'popover' ? (
          <Popper
            referenceElement={rootElement}
            transitionDuration={transitionDuration}
            transitionTimingFunction={transitionTimingFunction}
            forceUpdateDependencies={positionDependencies}
            transition={transition}
            mounted={dropdownOpened}
            position="bottom"
            placement="start"
            gutter={10}
            withinPortal={withinPortal}
            withArrow
            arrowSize={3}
            zIndex={zIndex}
            arrowClassName={classes.arrow}
          >
            <div
              className={classes.dropdownWrapper}
              ref={setDropdownElement}
              data-pattern-stop-propagation={dropdownOpened}
              onKeyDownCapture={closeOnEscape}
              aria-hidden={allowFreeInput || undefined}
            >
              <Paper className={classes.dropdown} shadow={shadow} ref={focusTrapRef}>
                {children}
              </Paper>
            </div>
          </Popper>
        ) : (
          <Modal
            opened={dropdownOpened}
            onClose={closeDropdown}
            withCloseButton={false}
            size={amountOfMonths * 400}
            zIndex={modalZIndex}
          >
            {children}
          </Modal>
        )}
      </Box>
    );
  }
);

DatePickerBase.displayName = '@pattern-ui/dates/DatePickerBase';

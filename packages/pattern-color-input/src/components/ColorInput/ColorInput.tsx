import React, { useState, useEffect, forwardRef } from 'react';
import { useUncontrolled, useDidUpdate, useUuid } from '@pattern-ui/hooks';
import {
  DefaultProps,
  Selectors,
  extractSystemStyles,
  getDefaultZIndex,
  usePatternDefaultProps,
} from '@pattern-ui/styles';
import { PatternTransition } from '@pattern-ui/transition';
import { InputWrapperStylesNames } from '@pattern-ui/input-wrapper';
import { Input, InputBaseProps, InputStylesNames } from '@pattern-ui/input';
import { ColorSwatch } from '@pattern-ui/color-swatch';
import { Popper } from '@pattern-ui/popper';
import { Paper } from '@pattern-ui/paper';
import {
  ColorPicker,
  ColorPickerBaseProps,
  ColorPickerStylesNames,
  convertHsvaTo,
  isColorValid,
  parseColor,
} from '@pattern-ui/color-picker';
import { Box } from '@pattern-ui/box';
import useStyles from './ColorInput.styles';

export type ColorInputStylesNames =
  | InputWrapperStylesNames
  | InputStylesNames
  | ColorPickerStylesNames
  | Selectors<typeof useStyles>;

export interface ColorInputProps
  extends InputBaseProps,
    ColorPickerBaseProps,
    DefaultProps<ColorInputStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'size' | 'onChange' | 'defaultValue' | 'value'> {
  /** Disallow free input */
  disallowInput?: boolean;

  /** call onChange with last valid value onBlur */
  fixOnBlur?: boolean;

  /** Dropdown element z-index */
  dropdownZIndex?: number;

  /** Display swatch with color preview on the left side of input */
  withPreview?: boolean;

  /** Dropdown transition name or object */
  transition?: PatternTransition;

  /** Dropdown appear/disappear transition duration in ms */
  transitionDuration?: number;

  /** Dropdown transition timing function, defaults to theme.transitionTimingFunction */
  transitionTimingFunction?: string;

  /** Whether to render the dropdown in a Portal */
  withinPortal?: boolean;

  /** Sets border color to red and aria-invalid=true on input element */
  invalid?: boolean;
}

const SWATCH_SIZES = {
  xs: 16,
  sm: 18,
  md: 22,
  lg: 28,
  xl: 36,
};

const ARROW_OFFSET = {
  xs: 12,
  sm: 15,
  md: 17,
  lg: 21,
  xl: 25,
};

const defaultProps: Partial<ColorInputProps> = {
  size: 'sm',
  format: 'hex',
  fixOnBlur: true,
  withPreview: true,
  swatchesPerRow: 10,
  withPicker: true,
  transition: 'pop-top-left',
  dropdownZIndex: getDefaultZIndex('popover'),
  transitionDuration: 0,
  withinPortal: true,
};

export const ColorInput = forwardRef<HTMLInputElement, ColorInputProps>(
  (props: ColorInputProps, ref) => {
    const {
      required,
      wrapperProps,
      size,
      format,
      onChange,
      onFocus,
      onBlur,
      value,
      defaultValue,
      classNames,
      styles,
      disallowInput,
      fixOnBlur,
      withPreview,
      swatchesPerRow,
      withPicker,
      icon,
      transition,
      id,
      dropdownZIndex,
      transitionDuration,
      transitionTimingFunction,
      withinPortal,
      className,
      style,
      swatches,
      sx,
      invalid,
      ...others
    } = usePatternDefaultProps('ColorInput', defaultProps, props);

    const { classes, cx, theme } = useStyles(
      { disallowInput },
      { classNames, styles, name: 'ColorInput' }
    );
    const { systemStyles, rest } = extractSystemStyles(others);
    const uuid = useUuid(id);
    const [referenceElement, setReferenceElement] = useState<HTMLDivElement>(null);
    const [dropdownOpened, setDropdownOpened] = useState(false);
    const [lastValidValue, setLastValidValue] = useState('');
    const [_value, setValue] = useUncontrolled({
      value,
      defaultValue,
      finalValue: '',
      rule: (val) => typeof val === 'string',
      onChange,
    });

    const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      typeof onFocus === 'function' && onFocus(event);
      setDropdownOpened(true);
    };

    const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      typeof onBlur === 'function' && onBlur(event);
      setDropdownOpened(false);
      fixOnBlur && setValue(lastValidValue);
    };

    useEffect(() => {
      if (isColorValid(_value) || _value.trim() === '') {
        setLastValidValue(_value);
      }
    }, [_value]);

    useDidUpdate(() => {
      if (isColorValid(_value)) {
        setValue(convertHsvaTo(format, parseColor(_value)));
      }
    }, [format]);

    return (
      <Box
        id={`${uuid}-wrapper`}
        classNames={classNames}
        styles={styles}
        className={className}
        style={style}
        sx={sx}
        {...systemStyles}
        {...wrapperProps}
      >
        <div ref={setReferenceElement}>
          <Input<'input'>
            {...rest}
            ref={ref}
            __staticSelector="ColorInput"
            id={uuid}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            spellCheck={false}
            size={size}
            value={_value}
            onChange={(event) => setValue(event.currentTarget.value)}
            invalid={invalid}
            required={required}
            autoComplete="nope"
            icon={
              icon ||
              (withPreview ? (
                <ColorSwatch
                  color={isColorValid(_value) ? _value : '#fff'}
                  size={theme.fn.size({ size, sizes: SWATCH_SIZES })}
                />
              ) : null)
            }
            readOnly={disallowInput}
            classNames={{ ...classNames, input: cx(classes.input, classNames?.input) }}
            styles={styles}
          />
        </div>

        <Popper
          referenceElement={referenceElement}
          transitionDuration={transitionDuration}
          transitionTimingFunction={transitionTimingFunction}
          transition={transition}
          mounted={dropdownOpened}
          position="bottom"
          placement="start"
          gutter={5}
          arrowSize={3}
          zIndex={dropdownZIndex}
          arrowStyle={{ left: theme.fn.size({ size, sizes: ARROW_OFFSET }) }}
          withinPortal={withinPortal}
        >
          <div style={{ pointerEvents: 'all' }}>
            <Paper<'div'>
              shadow="sm"
              p={size}
              className={classes.dropdownBody}
              onMouseDown={(event) => event.preventDefault()}
            >
              <ColorPicker
                __staticSelector="ColorInput"
                value={_value}
                onChange={setValue}
                format={format}
                swatches={swatches}
                swatchesPerRow={swatchesPerRow}
                withPicker={withPicker}
                size={size}
                focusable={false}
                styles={styles}
                classNames={classNames}
              />
            </Paper>
          </div>
        </Popper>
      </Box>
    );
  }
);

ColorInput.displayName = '@pattern-ui/core/ColorInput';

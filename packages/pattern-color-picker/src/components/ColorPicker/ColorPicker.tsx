import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { useUncontrolled, useDidUpdate } from '@pattern-ui/hooks';
import { DefaultProps, PatternSize, Selectors, usePatternDefaultProps } from '@pattern-ui/styles';
import { Box } from '@pattern-ui/box';
import { ColorSwatch } from '@pattern-ui/color-swatch';
import { convertHsvaTo, isColorValid, parseColor } from './converters';
import { ColorSliderStylesNames } from './ColorSlider/ColorSlider';
import { HueSlider } from './HueSlider/HueSlider';
import { AlphaSlider } from './AlphaSlider/AlphaSlider';
import { Saturation, SaturationStylesNames } from './Saturation/Saturation';
import { Swatches, SwatchesStylesNames } from './Swatches/Swatches';
import { ThumbStylesNames } from './Thumb/Thumb';
import { HsvaColor } from './types';
import useStyles from './ColorPicker.styles';

export type ColorPickerStylesNames =
  | Selectors<typeof useStyles>
  | ColorSliderStylesNames
  | SwatchesStylesNames
  | SaturationStylesNames
  | ThumbStylesNames;

export interface ColorPickerBaseProps {
  /** Controlled component value */
  value?: string;

  /** Uncontrolled component default value */
  defaultValue?: string;

  /** Called when color changes */
  onChange?(color: string): void;

  /** Color format */
  format?: 'hex' | 'rgba' | 'rgb' | 'hsl' | 'hsla';

  /** Set to false to display swatches only */
  withPicker?: boolean;

  /** Predefined colors */
  swatches?: string[];

  /** Number of swatches displayed in one row */
  swatchesPerRow?: number;

  /** Predefined component size */
  size?: PatternSize;
}

export interface ColorPickerProps
  extends DefaultProps<ColorPickerStylesNames>,
    ColorPickerBaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange' | 'value' | 'defaultValue'> {
  /** Force picker to take 100% width of its container */
  fullWidth?: boolean;

  /** Should interactive elements be focusable */
  focusable?: boolean;

  /** Static selector base */
  __staticSelector?: string;

  /** Saturation slider aria-label */
  saturationLabel?: string;

  /** Hue slider aria-label */
  hueLabel?: string;

  /** Alpha slider aria-label */
  alphaLabel?: string;
}

const SWATCH_SIZES = {
  xs: 26,
  sm: 34,
  md: 42,
  lg: 50,
  xl: 54,
};

const defaultProps: Partial<ColorPickerProps> = {
  swatchesPerRow: 10,
  size: 'sm',
  withPicker: true,
  focusable: true,
  __staticSelector: 'ColorPicker',
};

export const ColorPicker = forwardRef<HTMLDivElement, ColorPickerProps>(
  (props: ColorPickerProps, ref) => {
    const {
      value,
      defaultValue,
      onChange,
      format,
      swatches,
      swatchesPerRow,
      size,
      withPicker,
      fullWidth,
      focusable,
      __staticSelector,
      saturationLabel,
      hueLabel,
      alphaLabel,
      className,
      styles,
      classNames,
      ...others
    } = usePatternDefaultProps('ColorPicker', defaultProps, props);

    const { classes, cx, theme } = useStyles(
      { size, fullWidth },
      { classNames, styles, name: __staticSelector }
    );
    const formatRef = useRef(format);
    const valueRef = useRef<string>(null);
    const withAlpha = format === 'rgba' || format === 'hsla';

    const [shouldSkip, setShouldSkip] = useState(false);
    const [_value, setValue] = useUncontrolled({
      value,
      defaultValue,
      finalValue: '#FFFFFF',
      rule: (val) => isColorValid(val),
      onChange,
    });

    const [parsed, setParsed] = useState(parseColor(_value));

    const handleChange = (color: Partial<HsvaColor>) => {
      // This is required for useEffect to work, it's dirty but works fine
      setShouldSkip(true);

      setParsed((current) => {
        const next = { ...current, ...color };
        valueRef.current = convertHsvaTo(formatRef.current, next);
        return next;
      });

      Promise.resolve()
        .then(() => setValue(valueRef.current))
        .then(() => setShouldSkip(false));
    };

    useEffect(() => {
      if (isColorValid(value) && !shouldSkip) {
        setParsed(parseColor(value));
      }
    }, [value]);

    useDidUpdate(() => {
      formatRef.current = format;
      setValue(convertHsvaTo(format, parsed));
    }, [format]);

    return (
      <Box className={cx(classes.wrapper, className)} ref={ref} {...others}>
        {withPicker && (
          <>
            <Saturation
              value={parsed}
              onChange={handleChange}
              color={_value}
              styles={styles}
              classNames={classNames}
              size={size}
              focusable={focusable}
              saturationLabel={saturationLabel}
              __staticSelector={__staticSelector}
            />

            <div className={classes.body}>
              <div className={classes.sliders}>
                <HueSlider
                  value={parsed.h}
                  onChange={(h) => handleChange({ h })}
                  size={size}
                  styles={styles}
                  classNames={classNames}
                  focusable={focusable}
                  aria-label={hueLabel}
                  __staticSelector={__staticSelector}
                />

                {withAlpha && (
                  <AlphaSlider
                    value={parsed.a}
                    onChange={(a) => handleChange({ a })}
                    size={size}
                    color={convertHsvaTo('hex', parsed)}
                    style={{ marginTop: 6 }}
                    styles={styles}
                    classNames={classNames}
                    focusable={focusable}
                    aria-label={alphaLabel}
                    __staticSelector={__staticSelector}
                  />
                )}
              </div>

              {withAlpha && (
                <ColorSwatch
                  color={_value}
                  radius="sm"
                  size={theme.fn.size({ size, sizes: SWATCH_SIZES })}
                  className={classes.preview}
                />
              )}
            </div>
          </>
        )}

        {Array.isArray(swatches) && (
          <Swatches
            data={swatches}
            onSelect={handleChange}
            style={{ marginTop: 5 }}
            swatchesPerRow={swatchesPerRow}
            focusable={focusable}
            classNames={classNames}
            styles={styles}
            __staticSelector={__staticSelector}
          />
        )}
      </Box>
    );
  }
);

ColorPicker.displayName = '@pattern-ui/core/ColorPicker';

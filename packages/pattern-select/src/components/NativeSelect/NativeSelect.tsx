import React, { forwardRef } from 'react';
import { useUuid } from '@pattern-ui/hooks';
import {
  DefaultProps,
  PatternSize,
  extractSystemStyles,
  usePatternTheme,
  usePatternDefaultProps,
} from '@pattern-ui/styles';
import { InputWrapperStylesNames } from '@pattern-ui/input-wrapper';
import { Input, InputBaseProps, InputStylesNames } from '@pattern-ui/input';
import { getSelectRightSectionProps } from '../Select/SelectRightSection/get-select-right-section-props';
import { SelectItem } from '../Select';

export type NativeSelectStylesNames = InputStylesNames | InputWrapperStylesNames;

export interface NativeSelectProps
  extends DefaultProps<NativeSelectStylesNames>,
    InputBaseProps,
    Omit<React.ComponentPropsWithoutRef<'select'>, 'size'> {
  /** id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Adds hidden option to select and sets it as selected if value is not present */
  placeholder?: string;

  /** Data used to render options */
  data: (string | SelectItem)[];

  /** Style properties added to select element */
  inputStyle?: React.CSSProperties;

  /** Props passed to root element (InputWrapper component) */
  wrapperProps?: { [key: string]: any };

  /** Input size */
  size?: PatternSize;

  /** Sets border color to red and aria-invalid=true on input element */
  invalid?: boolean;
}

const defaultProps: Partial<NativeSelectProps> = {
  size: 'sm',
};

export const NativeSelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
  (props: NativeSelectProps, ref) => {
    const {
      id,
      className,
      required,
      style,
      data,
      placeholder,
      wrapperProps,
      inputStyle,
      onChange,
      value,
      classNames,
      styles,
      size,
      rightSection,
      rightSectionWidth,
      sx,
      invalid,
      ...others
    } = usePatternDefaultProps('NativeSelect', defaultProps, props);
    const uuid = useUuid(id);
    const theme = usePatternTheme();
    const { systemStyles, rest } = extractSystemStyles(others);

    const formattedData = data.map((item) =>
      typeof item === 'string' ? { label: item, value: item } : item
    );

    const options = formattedData.map((item) => (
      <option key={item.value} value={item.value} disabled={item.disabled}>
        {item.label}
      </option>
    ));

    if (placeholder) {
      options.unshift(
        <option key="placeholder" value="" disabled hidden>
          {placeholder}
        </option>
      );
    }

    return (
      <Input<'select'>
        {...rest}
        onChange={onChange}
        component="select"
        invalid={invalid}
        style={{
          ...style,
          ...inputStyle,
        }}
        aria-required={required}
        ref={ref}
        id={uuid}
        required={required}
        value={value === null ? '' : value}
        size={size}
        className={className}
        classNames={classNames}
        styles={styles}
        __staticSelector="NativeSelect"
        {...getSelectRightSectionProps({
          theme,
          rightSection,
          rightSectionWidth,
          styles,
          shouldClear: false,
          size,
          invalid,
        })}
        sx={sx}
        {...systemStyles}
        {...wrapperProps}
      >
        {options}
      </Input>
    );
  }
);

NativeSelect.displayName = '@pattern-ui/core/NativeSelect';

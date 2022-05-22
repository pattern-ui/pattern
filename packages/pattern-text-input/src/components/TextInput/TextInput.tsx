import React, { forwardRef } from 'react';
import { useUuid } from '@pattern-ui/hooks';
import { Box } from '@pattern-ui/box';
import {
  DefaultProps,
  PatternSize,
  extractSystemStyles,
  usePatternDefaultProps,
} from '@pattern-ui/styles';
import { Input, InputBaseProps, InputStylesNames } from '@pattern-ui/input';
import { InputWrapperStylesNames } from '@pattern-ui/input-wrapper';

export type TextInputStylesNames = InputStylesNames | InputWrapperStylesNames;

export interface TextInputProps
  extends DefaultProps<TextInputStylesNames>,
    InputBaseProps,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  /** id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Adds icon on the left side of input */
  icon?: React.ReactNode;

  /** Input element type */
  type?: 'text' | 'password' | 'email' | 'search' | 'tel' | 'url' | 'number';

  /** Props passed to root element (InputWrapper component) */
  wrapperProps?: { [key: string]: any };

  /** Input size */
  size?: PatternSize;

  /** Static css selector base */
  __staticSelector?: string;

  /** Sets border color to red and aria-invalid=true on input element */
  invalid?: boolean;
}

const defaultProps: Partial<TextInputProps> = {
  type: 'text',
  size: 'sm',
  __staticSelector: 'TextInput',
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props: TextInputProps, ref) => {
    const {
      className,
      id,
      invalid,
      required,
      type,
      style,
      icon,
      wrapperProps,
      size,
      classNames,
      styles,
      __staticSelector,
      sx,
      ...others
    } = usePatternDefaultProps('TextInput', defaultProps, props);

    const uuid = useUuid(id);
    const { systemStyles, rest } = extractSystemStyles(others);

    return (
      <Box
        id={`${uuid}-wrapper`}
        className={className}
        style={style}
        styles={styles}
        sx={sx}
        {...systemStyles}
        {...wrapperProps}
      >
        <Input<'input'>
          {...rest}
          required={required}
          ref={ref}
          id={uuid}
          type={type}
          invalid={invalid}
          icon={icon}
          size={size}
          classNames={classNames}
          styles={styles}
          __staticSelector={__staticSelector}
        />
      </Box>
    );
  }
);

TextInput.displayName = '@pattern-ui/core/TextInput';

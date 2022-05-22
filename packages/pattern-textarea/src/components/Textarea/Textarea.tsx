import React, { forwardRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useUuid } from '@pattern-ui/hooks';
import { Box } from '@pattern-ui/box';
import {
  DefaultProps,
  PatternSize,
  extractSystemStyles,
  usePatternDefaultProps,
} from '@pattern-ui/styles';
import { TextInputStylesNames } from '@pattern-ui/text-input';
import { Input, InputBaseProps, InputProps } from '@pattern-ui/input';
import useStyles from './Textarea.styles';

export interface TextareaProps
  extends DefaultProps<TextInputStylesNames>,
    InputBaseProps,
    React.ComponentPropsWithoutRef<'textarea'> {
  /** Id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** If true textarea will grow with content until maxRows are reached  */
  autosize?: boolean;

  /** Defines maxRows in autosize variant, not applicable to regular variant */
  maxRows?: number;

  /** Defined minRows in autosize variant and rows in regular variant */
  minRows?: number;

  /** Props passed to root element (InputWrapper component) */
  wrapperProps?: { [key: string]: any };

  /** Input size */
  size?: PatternSize;

  /** Static selectors base */
  __staticSelector?: string;
}

const defaultProps: Partial<TextareaProps> = {
  autosize: false,
  size: 'sm',
  __staticSelector: 'Textarea',
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props: TextareaProps, ref) => {
    const {
      autosize,
      maxRows,
      minRows,
      id,
      className,
      required,
      style,
      wrapperProps,
      classNames,
      styles,
      size,
      __staticSelector,
      sx,
      invalid,
      ...others
    } = usePatternDefaultProps('Textarea', defaultProps, props);

    const uuid = useUuid(id);
    const { classes, cx } = useStyles();
    const { systemStyles, rest } = extractSystemStyles(others);
    const sharedProps: InputProps<'textarea'> = {
      required,
      ref,
      invalid,
      id: uuid,
      classNames: { ...classNames, input: cx(classes.input, classNames?.input) },
      styles,
      __staticSelector,
      size,
      multiline: true,
      ...rest,
    };

    return (
      <Box
        id={`${uuid}-wrapper`}
        style={style}
        styles={styles}
        className={className}
        sx={sx}
        {...systemStyles}
        {...wrapperProps}
      >
        {autosize ? (
          <Input<typeof TextareaAutosize>
            {...sharedProps}
            component={TextareaAutosize}
            maxRows={maxRows}
            minRows={minRows}
          />
        ) : (
          <Input<'textarea'> {...sharedProps} component="textarea" rows={minRows} />
        )}
      </Box>
    );
  }
);

Textarea.displayName = '@pattern-ui/core/Textarea';

import React, { forwardRef } from 'react';
import { useBooleanToggle, useUuid } from '@pattern-ui/hooks';
import {
  Selectors,
  DefaultProps,
  extractSystemStyles,
  usePatternTheme,
  usePatternDefaultProps,
} from '@pattern-ui/styles';
import { ActionIcon } from '@pattern-ui/action-icon';
import { TextInputProps, TextInputStylesNames } from '@pattern-ui/text-input';
import { Input } from '@pattern-ui/input';
import { PasswordToggleIcon } from './PasswordToggleIcon';
import useStyles from './PasswordInput.styles';

export type PasswordInputStylesNames = Selectors<typeof useStyles> | TextInputStylesNames;

export interface PasswordInputProps
  extends DefaultProps<PasswordInputStylesNames>,
    Omit<TextInputProps, 'classNames' | 'styles'> {
  /** Toggle button tabIndex, set to 0 to make button focusable with tab key */
  toggleTabIndex?: -1 | 0;

  /** Provide your own visibility toggle icon */
  visibilityToggleIcon?: React.FC<{ reveal: boolean; size: number }>;
}

const buttonSizes = {
  xs: 22,
  sm: 28,
  md: 26,
  lg: 32,
  xl: 40,
};

const iconSizes = {
  xs: 12,
  sm: 15,
  md: 17,
  lg: 19,
  xl: 21,
};

const rightSectionSizes = {
  xs: 28,
  sm: 34,
  md: 34,
  lg: 44,
  xl: 54,
};

const defaultProps: Partial<PasswordInputProps> = {
  size: 'sm',
  toggleTabIndex: -1,
  visibilityToggleIcon: PasswordToggleIcon,
  __staticSelector: 'PasswordInput',
};

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (props: PasswordInputProps, ref) => {
    const {
      radius,
      disabled,
      size,
      invalid,
      toggleTabIndex,
      className,
      id,
      required,
      style,
      icon,
      wrapperProps,
      classNames,
      styles,
      variant,
      visibilityToggleIcon: VisibilityToggleIcon,
      __staticSelector,
      rightSection: _rightSection,
      rightSectionWidth: _rightSectionWidth,
      rightSectionProps: _rightSectionProps,
      sx,
      ...others
    } = usePatternDefaultProps('PasswordInput', defaultProps, props);

    const theme = usePatternTheme();
    const rightSectionWidth = theme.fn.size({ size, sizes: rightSectionSizes });
    const { classes, cx } = useStyles(
      { size, rightSectionWidth },
      { name: 'PasswordInput', classNames, styles }
    );
    const uuid = useUuid(id);
    const { systemStyles, rest } = extractSystemStyles(others);
    const [reveal, toggle] = useBooleanToggle(false);

    const rightSection = (
      <ActionIcon<'button'>
        className={classes.visibilityToggle}
        tabIndex={toggleTabIndex}
        radius={radius}
        size={theme.fn.size({ size, sizes: buttonSizes })}
        aria-hidden
        onMouseDown={(event) => {
          event.preventDefault();
          toggle();
        }}
        onKeyDown={(event) => {
          if (event.nativeEvent.code === 'Space') {
            event.preventDefault();
            toggle();
          }
        }}
      >
        <VisibilityToggleIcon reveal={reveal} size={theme.fn.size({ size, sizes: iconSizes })} />
      </ActionIcon>
    );

    return (
      <Input<'div'>
        id={`${uuid}-wrapper`}
        component="div"
        invalid={invalid}
        icon={icon}
        size={size}
        className={className}
        classNames={{ ...classNames, input: classes.input }}
        style={style}
        styles={styles}
        radius={radius}
        disabled={disabled}
        __staticSelector={__staticSelector}
        rightSectionWidth={rightSectionWidth}
        rightSection={!disabled && rightSection}
        variant={variant}
        sx={sx}
        {...systemStyles}
        {...wrapperProps}
      >
        <input
          type={reveal ? 'text' : 'password'}
          required={required}
          className={cx(classes.innerInput, {
            [classes.withIcon]: icon,
            [classes.invalid]: invalid,
          })}
          disabled={disabled}
          id={uuid}
          ref={ref}
          {...rest}
        />
      </Input>
    );
  }
);

PasswordInput.displayName = '@pattern-ui/core/PasswordInput';

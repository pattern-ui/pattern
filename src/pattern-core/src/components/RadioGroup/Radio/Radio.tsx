import React, { forwardRef } from 'react';
import { useUuid } from '@pattern/hooks';
import {
  DefaultProps,
  PatternSize,
  PatternColor,
  Selectors,
  extractSystemStyles,
  usePatternDefaultProps,
} from '@pattern/styles';
import { Box } from '../../Box';
import { RadioIcon } from './RadioIcon';
import useStyles from './Radio.styles';

export type RadioStylesNames = Exclude<Selectors<typeof useStyles>, 'labelDisabled'>;

export interface RadioProps
  extends DefaultProps<RadioStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  /** Radio label */
  label?: React.ReactNode;

  /** Radio value */
  value: string;

  /** Active radio color from theme.colors */
  color?: PatternColor;

  /** Predefined label fontSize, radio width, height and border-radius */
  size?: PatternSize;

  /** Static selector base */
  __staticSelector?: string;

  /** Replace default icon */
  icon?: React.FC<React.ComponentPropsWithoutRef<'svg'>>;

  /** Animation duration in ms */
  transitionDuration?: number;
}

const defaultProps: Partial<RadioProps> = {
  __staticSelector: 'Radio',
  icon: RadioIcon,
  transitionDuration: 100,
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props: RadioProps, ref) => {
  const {
    className,
    style,
    id,
    label,
    size,
    title,
    disabled,
    color,
    classNames,
    styles,
    __staticSelector,
    sx,
    icon: Icon,
    transitionDuration,
    ...others
  } = usePatternDefaultProps('Radio', defaultProps, props);

  const { classes, cx } = useStyles(
    { color, size, transitionDuration },
    { classNames, styles, name: __staticSelector }
  );
  const { systemStyles, rest } = extractSystemStyles(others);
  const uuid = useUuid(id);

  return (
    <Box
      className={cx(classes.radioWrapper, className)}
      style={style}
      title={title}
      sx={sx}
      {...systemStyles}
    >
      <div className={classes.inner}>
        <input
          ref={ref}
          className={classes.radio}
          type="radio"
          id={uuid}
          disabled={disabled}
          {...rest}
        />
        <Icon className={classes.icon} aria-hidden />
      </div>

      {label && (
        <label className={cx(classes.label, { [classes.labelDisabled]: disabled })} htmlFor={uuid}>
          {label}
        </label>
      )}
    </Box>
  );
});

Radio.displayName = '@pattern/core/Radio';

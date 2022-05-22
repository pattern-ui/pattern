import React, { cloneElement, forwardRef } from 'react';
import { useUncontrolled, useUuid } from '@pattern-ui/hooks';
import {
  DefaultProps,
  PatternNumberSize,
  PatternSize,
  PatternColor,
  usePatternDefaultProps,
} from '@pattern-ui/styles';
import { filterChildrenByType } from '@pattern-ui/utils';
import { InputWrapperStylesNames } from '@pattern-ui/input-wrapper';
import { Group } from '@pattern-ui/group';
import { Radio, RadioStylesNames } from './Radio/Radio';

export type RadioGroupStylesNames = InputWrapperStylesNames | RadioStylesNames;

export interface RadioGroupProps
  extends DefaultProps<RadioGroupStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  /** <Radio /> components only */
  children: React.ReactNode;

  /** Input name attribute, used to bind radios in one group, by default generated randomly with use-id hook */
  name?: string;

  /** Value of currently selected radio */
  value?: string;

  /** Called when value changes */
  onChange?(value: string): void;

  /** Initial value for uncontrolled component */
  defaultValue?: string;

  /** Horizontal or vertical orientation */
  orientation?: 'horizontal' | 'vertical';

  /** Spacing between radios in horizontal orientation */
  spacing?: PatternNumberSize;

  /** Active radio color from theme.colors */
  color?: PatternColor;

  /** Predefined label fontSize, radio width, height and border-radius */
  size?: PatternSize;

  /** Props spread to InputWrapper */
  wrapperProps?: { [key: string]: any };
}

const defaultProps: Partial<RadioGroupProps> = {
  orientation: 'horizontal',
  spacing: 'sm',
};

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (props: RadioGroupProps, ref) => {
    const {
      id,
      name,
      sx,
      children,
      value,
      defaultValue,
      onChange,
      orientation,
      spacing,
      color,
      size,
      classNames,
      styles,
      wrapperProps,
      ...others
    } = usePatternDefaultProps('RadioGroup', defaultProps, props);

    const rootId = useUuid(id);
    const uuid = useUuid(name);
    const [_value, setValue] = useUncontrolled({
      value,
      defaultValue,
      finalValue: '',
      onChange,
      rule: (val) => typeof val === 'string',
    });

    const radios = filterChildrenByType(children, Radio).map((radio, index) =>
      cloneElement(radio, {
        key: index,
        checked: _value === radio.props.value,
        name: uuid,
        color,
        size,
        classNames,
        styles,
        __staticSelector: 'RadioGroup',
        onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
          setValue(event.currentTarget.value),
      })
    );

    return (
      <Group
        ref={ref}
        id={rootId}
        styles={styles}
        role="radiogroup"
        aria-labelledby={`${rootId}-label`}
        spacing={spacing}
        direction={orientation === 'horizontal' ? 'row' : 'column'}
        sx={sx}
        {...wrapperProps}
        {...others}
      >
        {radios}
      </Group>
    );
  }
);

RadioGroup.displayName = '@pattern-ui/core/RadioGroup';

import React from 'react';
import { CheckIcon } from '@modulz/radix-icons';
import { Group, InputWrapper, usePatternTheme, ColorSwatch } from '@pattern-ui/core';
import { upperFirst } from '@pattern-ui/hooks';

interface ColorControlProps {
  value: string;
  label: string;
  onChange(value: string): void;
}

export function ColorControl({ value, label, onChange, ...others }: ColorControlProps) {
  const theme = usePatternTheme();

  const colors = Object.keys(theme.colors).map((color) => (
    <ColorSwatch
      color={theme.colorScheme === 'dark' ? theme.colors[color][7] : theme.colors[color][5]}
      component="button"
      key={color}
      onClick={() => onChange(color)}
      radius="sm"
      style={{
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.colorScheme === 'dark' ? theme.colors[color][2] : theme.white,
        flex: '1 0 calc(15% - 4px)',
      }}
    >
      {value === color && <CheckIcon style={{ width: 18, height: 18 }} />}
    </ColorSwatch>
  ));

  return (
    <InputWrapper labelElement="div" label={upperFirst(label)} {...others}>
      <Group spacing={2} style={{ marginTop: 5 }}>
        {colors}
      </Group>
    </InputWrapper>
  );
}

ColorControl.initialValue = 'blue';

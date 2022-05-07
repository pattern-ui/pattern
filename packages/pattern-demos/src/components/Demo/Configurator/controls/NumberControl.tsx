import React from 'react';
import { NumberInput } from '@pattern-ui/core';
import { upperFirst } from '@pattern-ui/hooks';

interface NumberControlProps {
  value: number;
  label: string;
  onChange(value: number): void;
}

export function NumberControl({ value, label, onChange, ...others }: NumberControlProps) {
  return (
    <NumberInput
      {...others}
      type="number"
      label={upperFirst(label)}
      value={value}
      onChange={onChange}
    />
  );
}

NumberControl.initialValue = 0;

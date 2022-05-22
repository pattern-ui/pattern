import React from 'react';
import { NumberInput } from '@pattern-ui/core';
import { upperFirst } from '@pattern-ui/hooks';
import { InputWrapper } from '@pattern-ui/input-wrapper';

interface NumberControlProps {
  value: number;
  label: string;
  onChange(value: number): void;
}

export function NumberControl({ value, label, onChange, ...others }: NumberControlProps) {
  return (
    <InputWrapper label={upperFirst(label)}>
      <NumberInput {...others} type="number" value={value} onChange={onChange} />
    </InputWrapper>
  );
}

NumberControl.initialValue = 0;
